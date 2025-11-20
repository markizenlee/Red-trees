import "./Brand.css";

import heroImage from "../assets/brand-hero.jpg";

function Brand() {
    return (
        <div className="brand-page">
            <section className="hero">
                <img src={heroImage} alt="brand hero" className="image" />
                <div className="text-container">
                    <p className="text">
                        Our vision — to make fashion-forward jewellery refined, expressive and truly accessible. <br /><br />
                        Red Trees believes every woman deserves everyday pieces that feel modern, elevated and effortless to wear. <br /><br />
                        Our design language blends global fashion influences with contemporary simplicity. From runway-inspired statements to clean everyday essentials, each collection brings fresh style and thoughtful craftsmanship, with new arrivals every week to keep your look evolving and exciting. <br /><br />
                        Born in the UAE and shaped by a multicultural design perspective, Red Trees celebrates confidence, self-expression and lifestyle elegance — jewellery made to accompany your moments, your mood, and your rhythm. <br /><br />
                        <span className="bold">Red Trees — Grow & Glow</span>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Brand;