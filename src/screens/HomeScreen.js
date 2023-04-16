import React from "react";
import products from "../data/products";
import NewProduct from "../components/NewProduct";

const HomeScreen = () => {
    return (
        <>
            <h1>Discovery our new DRINKS for SUMMER!</h1>
            <div className="row">
                {products.map(product => (
                        <NewProduct product={product}/>
                ))}
            </div>
        </>
    );
}
export default HomeScreen;