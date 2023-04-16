import React from "react";
import products from "../data/products";
import Product from "../components/Product";

const MenuScreen = () => {
    return (
        <>
            <h1>Menu</h1>
            <div className="row">
                {products.map(product => (
                    <div className="col col-4" key={product.id}>
                        <Product product={product}/>
                    </div>
                ))}
            </div>
        </>
    );
}
export default MenuScreen;