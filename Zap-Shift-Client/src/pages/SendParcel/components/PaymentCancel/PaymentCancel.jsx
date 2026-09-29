import { Link } from "react-router";

function PaymentCancel() {
  return (
    <div>
          <h3>Payment Cancelled</h3>
          <Link to={"/send-parcel"}>Try Again</Link>
    </div>
  );
}

export default PaymentCancel;
