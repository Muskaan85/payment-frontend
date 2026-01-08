import { useDispatch } from "react-redux";
import { createOrder } from "./paymentSlice";

function PayButton() {
  const dispatch = useDispatch();

  const handlePay = async () => {
    const res = await dispatch(
      createOrder({ amount: 499, email: "kevinsikri@gmail.com" })
    );

    if (res.payload?.payment_session_id) {
      window.location.href =
        `https://sandbox.cashfree.com/pg/view?session_id=${res.payload.payment_session_id}`;
    }
  };

  return <button onClick={handlePay}>Pay ₹499</button>;
}

export default PayButton;
