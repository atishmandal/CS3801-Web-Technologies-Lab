import React from "react";

function ProductItem({ product, deleteProduct }) {
    return (
        <div className="product-card">
            <img
                src={product.image}
                alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <p>
                Category: {product.category}
            </p>

            <h4>₹{product.price}</h4>

            <button
                onClick={() => deleteProduct(product._id)}
            >
                Delete
            </button>
        </div>
    );
}

export default ProductItem;
