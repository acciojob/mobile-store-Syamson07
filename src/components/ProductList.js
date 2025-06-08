import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(initialProducts);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div className="col-12" key={product.id}>
            <div>
              <Link to={`/products/${product.id}`}>
                <div className="row">
                  <img src={product.image} alt={product.name} width="100" />
                  <div>
                    <h3>{product.name}</h3>
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

export default ProductList;
