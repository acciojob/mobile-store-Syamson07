import React, { useState } from "react";
import data from "../data";

export default function AdminPanel() {
  const [products, setProducts] = useState(data);

  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="col-12">
      <h1>Admin Panel</h1>
      {products.map((product) => (
        <div key={product.id}>
          <a href="#">
            <div className="row">
              {product.name} - ₹{product.price}
            </div>
          </a>
          <button onClick={() => removeProduct(product.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
