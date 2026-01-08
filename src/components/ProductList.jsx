// components/ProductList.jsx
import { useEffect, useState } from "react";
import { fetchShoes } from "../api/productsApi";
import ProductCard from "./Productcard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchShoes().then(setProducts);
  }, []);

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
