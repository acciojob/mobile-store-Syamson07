import { Link } from "react-router-dom";
import { useState } from "react";
import data from "../data";

export default function ProductList() {
  const [products] = useState(data);

  return (
    <div>
      <h2>Mobile Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.name} - ₹{product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
