import "./Brand.css";

import heroImage from "../assets/brand-hero.jpg";
import mobileHeroImage from "../assets/brand-hero-mobile.jpg";

function Brand() {
    return (
        <div className="brand-page">
            <section className="hero">
                <picture className="image-frame">
                    <source media="(max-width: 992px)" srcSet={mobileHeroImage} />
                    <img src={heroImage} alt="Red Trees jewellery store interior with peach display counters and jewellery collections" className="image" />
                </picture>
                <div className="text-container fade-section">
                    <div className="text">
                        <h1 className="brand-heading">Our vision — to make fashion-forward jewellery refined, expressive and truly accessible.</h1>
                        <p>Red Trees believes every woman deserves everyday pieces that feel modern, elevated and effortless to wear.</p>
                        <p>Our design language blends global fashion influences with contemporary simplicity. From runway-inspired statements to clean everyday essentials, each collection brings fresh style and thoughtful craftsmanship, with new arrivals every week to keep your look evolving and exciting.</p>
                        <p>Born in the UAE and shaped by a multicultural design perspective, Red Trees celebrates confidence, self-expression and lifestyle elegance — jewellery made to accompany your moments, your mood, and your rhythm.</p>
                        <p className="brand-tagline">Red Trees — Grow & Glow</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Brand;
