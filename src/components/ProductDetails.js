import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const dummyProducts = JSON.parse(localStorage.getItem("products")) || [];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = dummyProducts.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>
      <button className="btn" onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default ProductDetails;
