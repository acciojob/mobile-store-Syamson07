import React from "react";
import { Link } from "react-router-dom";

const dummyProducts = [
  { id: 1, name: "iPhone 14", price: "$999", description: "Apple flagship phone.", image: "https://placehold.co/300x200" },
  { id: 2, name: "Samsung S22", price: "$899", description: "Samsung flagship phone.", image: "https://placehold.co/300x200" },
];

const ProductList = () => {
  return (
    <div className="container">
      {dummyProducts.map((product) => (
        <div className="product" key={product.id}>
          <Link className="product-link" to={`/products/${product.id}`}>
            <div className="row">
              <img src={product.image} alt={product.name} width="200" />
              <div>{product.name}</div>
              <div>{product.price}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
