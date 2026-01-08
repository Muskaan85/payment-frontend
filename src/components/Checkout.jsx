// components/Checkout.jsx
import { useDispatch } from "react-redux";
import { createOrder } from "../redux/paymentSlice";

export default function Checkout({ amount }) {
  const dispatch = useDispatch();

  const handlePay = async () => {
    const res = await dispatch(
      createOrder({ amount, email: "testuser@gmail.com" })
    );

    if (res.payload?.payment_session_id) {
      window.location.href = `https://sandbox.cashfree.com/pg/view?session_id=${res.payload.payment_session_id}`;
    }
  };

  return (
    <button className="pay-btn" onClick={handlePay}>
      Pay ₹{amount}
    </button>
  );
}
