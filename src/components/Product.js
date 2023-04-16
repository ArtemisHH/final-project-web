import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    return (
        <div className="card my-3 rounded text-dark">
            <Link to={`/products/${product.id}`} className="text-decoration-none">
                <img className="card-img" src={`/images/${product.image}`} alt=""
                     style={{backgroundImage: `/image/product-placeholder.jpg`}}/>
                <div className="card-body text-dark">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.desc}</p>
                    <span className="align-content-center">From $ {product.price}</span>
                </div>
            </Link>
        </div>
    )
}
export default Product;