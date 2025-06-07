import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../data";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products] = useState(data);
  const product = products.find((p) => p.id === Number(id));

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>
      <button className="btn" onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
