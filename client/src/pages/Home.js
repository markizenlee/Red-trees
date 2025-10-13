import "./Home.css";
import heroImage from "../assets/home-hero.png";

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
        </div>
    );
}

export default Home;