import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialProducts = [
  { id: 1, name: "iPhone 14", price: "$999", description: "Apple flagship phone.", image: "https://placehold.co/300x200" },
  { id: 2, name: "Samsung S22", price: "$899", description: "Samsung flagship phone.", image: "https://placehold.co/300x200" },
];

const AdminPanel = () => {
  const [products, setProducts] = useState(initialProducts);
  const [form, setForm] = useState({ name: "", price: "", description: "", image: "" });
  const navigate = useNavigate();

  const handleAdd = () => {
    const newProduct = { ...form, id: Date.now() };
    setProducts([...products, newProduct]);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEdit = (id) => {
    const updated = products.map((p) => p.id === id ? { ...p, price: prompt("New price:", p.price) } : p);
    setProducts(updated);
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <input className="form-control" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="form-control" placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input className="form-control" placeholder="Image URL" onChange={(e) => setForm({ ...form, image: e.target.value })} />
        <input className="form-control" placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {products.map((product) => (
          <div className="product" key={product.id}>
            <a className="product-link" onClick={() => navigate(`/products/${product.id}`)}>{product.name}</a>
            <button className="float-right" onClick={() => handleDelete(product.id)}>Delete</button>
            <button className="float-right" onClick={() => handleEdit(product.id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
