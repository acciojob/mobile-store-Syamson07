import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const dummyProducts = [
  { id: 1, name: "iPhone 14", price: "$999", description: "Apple flagship phone.", image: "https://placehold.co/300x200" },
  { id: 2, name: "Samsung S22", price: "$899", description: "Samsung flagship phone.", image: "https://placehold.co/300x200" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = dummyProducts.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="300" />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button className="btn" onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default ProductDetails;
