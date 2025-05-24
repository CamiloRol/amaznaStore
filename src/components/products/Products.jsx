import React, { useEffect, useState } from "react";
import IndiProduct from "./IndiProduct";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/productos")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {products.map(product => (
        <IndiProduct key={product.produId} product={product} />
      ))}
    </div>
  );
}

