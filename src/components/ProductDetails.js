import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import data from "../data";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products] = useState(data);
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <button className="btn" onClick={() => navigate("/")}>Back</button>
      </div>
    );
  }

  return (
    <div>
      <img src={product.image} alt={product.name} width="150" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>
      <button className="btn" onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
