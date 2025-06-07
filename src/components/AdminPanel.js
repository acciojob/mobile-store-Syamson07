import { useState } from "react";
import data from "../data";

export default function AdminPanel() {
  const [products, setProducts] = useState(data);
  const [form, setForm] = useState({ name: "", description: "", image: "", price: "" });

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (id, value) => {
    setProducts(products.map((p) => p.id === id ? { ...p, price: value } : p));
  };

  const handleAdd = () => {
    const newProduct = {
      id: Date.now(),
      ...form,
      price: Number(form.price)
    };
    setProducts([...products, newProduct]);
    setForm({ name: "", description: "", image: "", price: "" });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      {products.map((product, idx) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} width="80" />
          <p>{product.name}</p>
          <input
            className="form-control"
            value={product.price}
            onChange={(e) => handleEdit(product.id, e.target.value)}
          />
          <button className="float-right" onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
      <hr />
      <h3>Add Product</h3>
      <input
        className="form-control"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="form-control"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        className="form-control"
        placeholder="Image URL"
        value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <input
        className="form-control"
        placeholder="Price"
        type="number"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
