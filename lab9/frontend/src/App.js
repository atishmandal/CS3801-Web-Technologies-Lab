import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/products"
            );

            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const addProduct = async (product) => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/products",
                product
            );

            setProducts([...products, response.data]);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(
                `http://localhost:5000/api/products/${id}`
            );

            setProducts(
                products.filter((product) => product._id !== id)
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="App">
            <h1>Shopping Catalogue</h1>

            <ProductForm addProduct={addProduct} />

            <ProductList
                products={products}
                deleteProduct={deleteProduct}
            />
        </div>
    );
}

export default App;
