import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, deleteProduct }) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem
                    key={product._id}
                    product={product}
                    deleteProduct={deleteProduct}
                />
            ))}
        </div>
    );
}

export default ProductList;
