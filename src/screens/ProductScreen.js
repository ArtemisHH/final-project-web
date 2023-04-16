import React from "react";
import products from "../data/products";
import { Link } from "react-router-dom";

const ProductScreen = ({ match }) => {
    const product = products.find((p) => p.id === match.params.id);

    return (
        <>
            <Link to="/" className="btn my-3">
                Back to Menu
            </Link>
            <div className="row">
                <div className="col col-6">
                    <img src={product.image} alt="coming soon"/>
                    <span className="fw-bold">{product.name}</span>
                    <span>{product.desc}</span>
                    <span>$ {product.price}</span>
                </div>
                <div className="">
                    <h3>Customizations</h3>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <label>Size</label>
                            <select className="form-select">
                                <option selected>Small</option>
                                <option value="1">Medium + $0.50</option>
                                <option value="2">Large + $1.00</option>
                            </select>

                        </li>
                    </ul>
                </div>
            </div>
            <button className="position-absolute overflow-auto btn-danger">Add to Order</button>

        </>
    );
}
export default ProductScreen;