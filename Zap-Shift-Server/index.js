import "dotenv/config";
import express, { json } from "express";
import cors from "cors";
import { MongoClient, ObjectId } from "mongodb";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(cors());

const client = new MongoClient(process.env.MONGODB_URI);

const db = client.db("zapShift_db");
const parcelsCollection = db.collection("parcels");

app.get("/", (req, res) => {
  res.send("Zap Shift Server is running!");
});

app.get("/parcels", async (req, res) => {
  const query = {};
  const { email } = req.query;
  if (email) {
    query["sender-email"] = email;
  }
  const cursor = parcelsCollection.find(query);
  const result = await cursor.toArray();
  res.send(result);
});

app.post("/parcels", async (req, res) => {
  const parcel = req.body;
  const result = await parcelsCollection.insertOne(parcel);
  res.send(result);
});

app.get("/parcels/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await parcelsCollection.findOne(query);
  res.send(result);
});

app.delete("/parcels/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await parcelsCollection.deleteOne(query);
  res.send(result);
});

app.post("/create-checkout-session", async (req, res) => {
  const parcelInfo = req.body;
  const amount = parseFloat(parcelInfo.cost) * 100;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "USD",
          unit_amount: amount,
          product_data: {
            name: parcelInfo.parcelName,
          },
        },
        quantity: 1,
      },
    ],
    customer_email: parcelInfo.email,
    mode: "payment",
    metadata: {
      parcelId: parcelInfo.parcelId,
    },
    success_url: `${process.env.SITE_DOMAIN}/checkout/payment-success`,
    cancel_url: `${process.env.SITE_DOMAIN}/checkout/payment-cancelled`,
  });
  res.send({ url: session.url });
});

client
  .connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`ZapShift app listening on port ${port}`);
    });
  })
  .catch(console.dir);

export default app;
