import storeS01Image from "../../assets/store-S01.jpg";
import storeS02Image from "../../assets/store-S02.jpg";
import storeS03Image from "../../assets/store-S03.jpg";

function SharjahStore() {
    return (
        <div>
            <section className="content">
                <div className="text-container">
                    <p className="title">
                        Sharjah Sahara Center
                    </p>
            
                    <p className="text">
                        Ground Floor <br /><br />
                    </p>
                </div>
            
                <div className="image-container">
                    <img src={storeS01Image} alt="store Sharjah 01 image" className="image" />
                </div>
            </section>

            <section className="content">
                <div className="text-container">
                    <p className="title">
                        Sharjah City Center
                    </p>
            
                    <p className="text">
                        First Floor <br /><br />
                        TEL: 06-5522288
                    </p>
                </div>
            
                <div className="image-container">
                    <img src={storeS02Image} alt="store Sharjah 02 image" className="image" />
                </div>
            </section>

            <section className="content">
                <div className="text-container">
                    <p className="title">
                        Sharjah Mega Mall
                    </p>
            
                    <p className="text">
                        Ground Floor <br /><br />
                        TEL: 06-5500018
                    </p>
                </div>
            
                <div className="image-container">
                    <img src={storeS03Image} alt="store Sharjah 03 image" className="image" />
                </div>
            </section>
        </div>
    );
}

export default SharjahStore;