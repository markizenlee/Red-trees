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
                    <p className="text">
                        As a leader in the world of fashion accessories, RED TREES is dedicated to creating a dreamland of daily wear for consumers of all styles and lifestyles. <br /> <br />
                        We deeply understand the desire for self-expression and the pursuit of diverse life experiences. Through our ingenious designs, we bring to life every individual’s boundless imagination of fashion. <br /> <br />
                        Here, every customer can effortlessly create daily inspiration and shine with their own unique brilliance.
                    </p>
                </div>

                <div className="image-container">
                    <img src={heroImage} alt="hero image" className="image" />
                </div>
            </section>

            <section className="content">
                <div className="image-container">
                    <img src={brandImage} alt="brand image" className="image" />
                </div>

                <div className="text-container">
                    <p className="text">
                        Brand
                    </p>
                </div>
            </section>

            <section className="content">
                <div className="text-container">
                    <p className="text">
                        Product
                    </p>
                </div>
                
                <div className="image-container">
                    <img src={productImage} alt="product image" className="image" />
                </div>
            </section>

            <section className="content">
                <div className="image-container">
                    <img src={storeImage} alt="store image" className="image" />
                </div>

                <div className="text-container">
                    <p className="text">
                        Store
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Home;