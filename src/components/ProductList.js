import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

export default function ProductList() {
  return (
    <div className="container">
      <div className="row">
        {data.map((product) => (
          <div className="col-12" key={product.id}>
            <div className="product-item">
              <Link to={`/products/${product.id}`}>
                <div className="row">
                  <img src={product.image} alt={product.name} width="100" />
                  <div>
                    <h4>{product.name}</h4>
                    <p>₹{product.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
