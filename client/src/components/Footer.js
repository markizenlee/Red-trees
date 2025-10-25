import { Link } from "react-router-dom";

import "./Footer.css";

import logo_bw from "../assets/logo_bw.svg";
import insta from "../assets/instagram_icon.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="left-section">
                <Link to="/">
                    <img src={logo_bw} alt="Logo" className="logo" />
                </Link>
            </div>

            <div className="right-section">
                <Link to="https://www.instagram.com/redtreesuae/">
                    <img src={insta} alt="instagram" className="insta" />
                </Link>

                <p className="text">
                    redtreesuae@hotmail.com
                </p>
            </div>
        </footer>
    );
}

export default Footer;