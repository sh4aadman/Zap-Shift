import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../../components/Ui/Loading/Loading";

function Payment() {
  const { id } = useParams();

  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", id],
    queryFn: async () => {
      const response = await axiosSecure.get(`/parcels/${id}`);
      return response.data;
    },
  });

  const handlePayment = async () => {
    const parcelInfo = {
      parcelId: parcel._id,
      parcelName: parcel["parcel-name"],
      email: parcel["sender-email"],
      cost: parcel.cost,
    };
    const response = await axiosSecure.post(
      "/create-checkout-session",
      parcelInfo,
    );
    window.location.href = response.data.url;
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-14 mb-16 px-28 py-20 rounded-4xl bg-white">
      <h2>Proceed to payment for : {parcel["parcel-name"]}</h2>
      <button onClick={handlePayment} className="btn btn-primary text-black">
        Pay
      </button>
    </div>
  );
}

export default Payment;
