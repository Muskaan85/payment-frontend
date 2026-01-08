import { useSelector } from "react-redux";
import Checkout from "./Checkout";

export default function Cart() {
  const items = useSelector((state) => state.cart?.items || []);
  const state = useSelector((state) => state);
  console.log("Redux state:", state);

  const total = items.reduce(
    (sum, i) => sum + i.qty * Math.round(i.price * 80),
    0
  );

  if (items.length === 0) {
    return (
      <div className="cart">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Cart Summary</h2>

      {items.map((i) => (
        <p key={i.id}>
          {i.title} × {i.qty}
        </p>
      ))}

      <h3>Total: ₹{total}</h3>
      <Checkout amount={total} />
    </div>
  );
}
