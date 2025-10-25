import { Link } from "react-router-dom";

import "./Footer.css";

import logo_bw from "../assets/logo_bw.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="left-section">
                <Link to="/">
                    <img src={logo_bw} alt="Logo" className="logo" />
                </Link>
            </div>

            <div className="right-section">
                <Link to="/product">Product</Link>
                <Link to="/brand">Brand</Link>
                <Link to="/stores">Stores</Link>
                <Link to="/contact-us">Contact Us</Link>
            </div>
        </footer>
    );
}

export default Footer;