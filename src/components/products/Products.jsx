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

    <div className="absolute top-170 left-10  flex space-x-4 p-4 scrollbar-hide">

         {products.map(product => (
        <IndiProduct key={product.produId} product={product} />
      ))}
        

    </div>
     
  );
}

{/* <div className="absolute left-115 top-80 grid grid-cols-3 grid-rows-2 gap-10 p-4">

         {products.map(product => (
        <IndiProduct key={product.produId} product={product} />
      ))}
        

    </div> */}