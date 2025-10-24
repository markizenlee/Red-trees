import { Link } from "react-router-dom";

import "./Home.css";

import heroImage from "../assets/home-hero.jpg";
import brandImage from "../assets/home-brand.jpg";
import productImage from "../assets/home-product.jpg";
import storeImage from "../assets/home-store.jpg";

function Home() {
    return (
        <div>
            <section className="hero">
                <div className="text-container">
                    <p className="title">
                        Red Trees — Global Jewelry for Everyday Brilliance <br />
                    </p>

                    <p className="text">
                        Born in the heart of Dubai, Red Trees is a contemporary jewelry brand that redefines daily elegance. <br /><br />
                        Our vision extends beyond adornment — we are building a global network of franchise partners who share our belief that beauty should be effortless, expressive, and attainable. <br /><br />
                        Inspired by the vitality of modern life and the artistry of timeless design, Red Trees invites you to explore a world where jewelry becomes a language of confidence and individuality. <br /><br />
                    </p>
                </div>

                <div className="image-container">
                    <img src={heroImage} alt="hero image" className="image" />
                </div>
            </section>

            <section className="content">
                <div className="image-container">
                    <img src={productImage} alt="product image" className="image" />
                </div>

                <div className="text-container">
                    <Link className="text" to="/product">
                        Product
                    </Link>
                </div>
            </section>

            <section className="content">
                <div className="text-container">
                    <Link className="text" to="/brand">
                        Brand
                    </Link>
                </div>
                
                <div className="image-container">
                    <img src={brandImage} alt="brand image" className="image" />
                </div>
            </section>

            <section className="content">
                <div className="image-container">
                    <img src={storeImage} alt="store image" className="image" />
                </div>

                <div className="text-container">
                    <Link className="text" to="/stores">
                        Store
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;