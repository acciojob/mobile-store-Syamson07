import React, { useEffect, useState } from "react";

const initialProducts = [
  { id: 1, name: "iPhone 13", price: 79999, image: "https://via.placeholder.com/150", description: "Apple flagship" },
  { id: 2, name: "Samsung S22", price: 69999, image: "https://via.placeholder.com/150", description: "Samsung flagship" },
  { id: 3, name: "Pixel 7", price: 59999, image: "https://via.placeholder.com/150", description: "Google Pixel" },
  { id: 4, name: "OnePlus 10", price: 49999, image: "https://via.placeholder.com/150", description: "Fast and smooth" },
  { id: 5, name: "Realme GT", price: 32999, image: "https://via.placeholder.com/150", description: "Affordable performance" },
  { id: 6, name: "Xiaomi 12", price: 45999, image: "https://via.placeholder.com/150", description: "Xiaomi’s best" },
  { id: 7, name: "iQOO 9", price: 39999, image: "https://via.placeholder.com/150", description: "Gaming phone" },
  { id: 8, name: "Motorola Edge", price: 36999, image: "https://via.placeholder.com/150", description: "Stock Android" },
];

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "", description: "" });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products")) || initialProducts;
    setProducts(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleDelete = id => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleAdd = () => {
    const nextId = Math.max(...products.map(p => p.id)) + 1;
    setProducts([...products, { ...newProduct, id: nextId, price: parseInt(newProduct.price) }]);
    setNewProduct({ name: "", price: "", image: "", description: "" });
  };

  const handleEditPrice = (id, newPrice) => {
    setProducts(products.map(p => (p.id === id ? { ...p, price: parseInt(newPrice) } : p)));
  };

  return (
    <div className="container">
      <h2>Admin Panel</h2>
      <div>
        <input className="form-control" placeholder="Name" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
        <input className="form-control" placeholder="Price" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
        <input className="form-control" placeholder="Image URL" value={newProduct.image} onChange={e => setNewProduct({ ...newProduct, image: e.target.value })} />
        <input className="form-control" placeholder="Description" value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
        <button onClick={handleAdd}>Add</button>
      </div>
      {products.map((p, index) => (
        <div className="col-12" key={p.id}>
          <div>
            <a href={`/products/${p.id}`}>
              <div className="row">
                <h4>{p.name}</h4>
                <p>₹{p.price}</p>
              </div>
            </a>
            <input
              className="form-control"
              value={p.price}
              onChange={e => handleEditPrice(p.id, e.target.value)}
            />
            <button className="float-right" onClick={() => handleDelete(p.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
