import React, { useState } from "react";
import "./ProductCatalog.css";

// sample product data
const products = [
  { id: 1, name: "Wireless Mouse", category: "Electronics", price: 599, qty: 12 },
  { id: 2, name: "Bluetooth Speaker", category: "Electronics", price: 1499, qty: 0 },
  { id: 3, name: "Cotton T-Shirt", category: "Clothing", price: 399, qty: 25 },
  { id: 4, name: "Denim Jacket", category: "Clothing", price: 2199, qty: 0 },
  { id: 5, name: "Basmati Rice 5kg", category: "Grocery", price: 549, qty: 40 },
  { id: 6, name: "Olive Oil 1L", category: "Grocery", price: 699, qty: 0 },
  { id: 7, name: "Laptop Stand", category: "Electronics", price: 899, qty: 8 },
  { id: 8, name: "Running Shoes", category: "Clothing", price: 1799, qty: 15 },
];

function ProductCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000);

  // apply all filters together
  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category === "All" ? true : p.category === category))
    .filter((p) => p.price <= maxPrice);

  return (
    <div className="catalog-container">
      <h2>Product Catalog</h2>

      {/* search box */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      {/* filters */}
      <div className="filters">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Grocery">Grocery</option>
        </select>

        <label className="price-label">
          Max Price: ₹{maxPrice}
          <input
            type="range"
            min="0"
            max="3000"
            step="100"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
      </div>

      {/* product count */}
      <p className="count-text">{filteredProducts.length} product(s) found</p>

      {/* product list */}
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p>No products match your search.</p>
        ) : (
          filteredProducts.map((p) => (
            <div key={p.id} className="product-card">
              <h4>{p.name}</h4>
              <p className="category-text">{p.category}</p>
              <p className="price-text">₹{p.price}</p>
              {/* conditional rendering for stock status */}
              {p.qty === 0 ? (
                <p className="stock-out">Out of Stock</p>
              ) : (
                <p className="stock-in">In Stock ({p.qty})</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductCatalog;
