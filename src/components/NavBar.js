import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

function NavBar(){
    const {pathname} = useLocation();
    const isActive = (path) =>
        pathname.indexOf(path) >= 0 ? 'active':'';
    return (
        <div className="container bg-dark py-3">
            <div className="nav nav-pills ml-auto">
                <Link to="/" className={`nav-link align-items-center ${isActive('home')}`}>
                    <i className="fa fa-coffee fa-2xl me-2"></i>
                </Link>
                <Link to="/menu" className={`nav-link align-items-center me-auto ${isActive('menu')}`}>
                    Menu</Link>
                <Link to="/signin" className={`nav-link align-items-center ms-1 ${isActive('signin')}`}>
                    <i className="fas fa-user ms-2"></i>
                    <span className="ms-2">Sign In</span></Link>
                <Link to="/cart" className={`nav-link align-items-center ms-1 ${isActive('cart')}`}>
                    <i className="fa fa-shopping-bag"></i>
                    <span className="ms-2">Cart</span></Link>
            </div>
        </div>
    );
}
export default NavBar;