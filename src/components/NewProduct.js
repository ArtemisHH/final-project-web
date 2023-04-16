import React from "react";

const NewProduct = ({ product }) => {
    return (
        <div className="card my-3 rounded">
            <a href={`/products/${product.id}`}>
                <img className="card-img" src={`/images/${product.image}`} alt=""
                     style={{backgroundImage: `/image/product-placeholder.jpg`}}/>
                <div className="card-img-overlay">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.desc}</p>
                </div>
            </a>
        </div>
    )
}
export default NewProduct;