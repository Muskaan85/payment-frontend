import axios from "axios";

export const fetchShoes = async () => {
  const res = await axios.get("https://dummyjson.com/products/search?q=shoes");

  return res.data.products;
};
