import "./Header.css";
import logo_bw from "../assets/logo_bw.svg";

function Header() {
    return (
        <header className="header">
            <div className="middle-row">
                <a href="/" className="logo-link">
                    <img src={logo_bw} alt="Logo" className="logo" />
                </a>
            </div>

            <div className="bottom-row">
                <a href="#">Product</a>
                <a href="#">Brand</a>
                <a href="#">Stores</a>
                <a href="#">Contact Us</a>
            </div>
        </header>
    );
}

export default Header;