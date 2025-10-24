import { Link } from "react-router-dom";

import "./Header.css";

import logo_bw from "../assets/logo_bw.svg";

function Header() {
    return (
        <header className="header">
            <div className="middle-row">
                <Link to="/" className="logo-link">
                    <img src={logo_bw} alt="Logo" className="logo" />
                </Link>
            </div>

            <div className="bottom-row">
                <Link to="/product">Product</Link>
                <Link to="/brand">Brand</Link>
                <Link to="/stores">Stores</Link>
                <Link to="/contact-us">Contact Us</Link>
            </div>
        </header>
    );
}

export default Header;