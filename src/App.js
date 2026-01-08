// App.js
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./styles/app.css";

export default function App() {
  return (
    <>
      <Header />
      <ProductList />
      <Cart />
    </>
  );
}
