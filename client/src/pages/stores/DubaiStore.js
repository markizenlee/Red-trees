import storeD01Image from "../../assets/store-D01.jpg";
import storeD02Image from "../../assets/store-D02.jpg";
import storeD03Image from "../../assets/store-D03.jpg";
import storeD04Image from "../../assets/store-D04.jpg";
import storeD05Image from "../../assets/store-D05.jpg";

function DubaiStore() {
    return (
        <div>
            <section className="content">
                <div className="text-container">
                    <p className="title">
                        Dubai Burjuman Center
                    </p>

                    <p className="text">
                        First Floor <br /><br />
                        TEL: (0455) 247 86
                    </p>
                </div>

                <div className="image-container">
                    <img src={storeD01Image} alt="store Dubai 01 image" className="image" />
                </div>
            </section>

            <section className="content">
                <div className="text-container">
                    <p className="title">
                        Dubai Al Ghurair Center
                    </p>

                    <p className="text">
                        Ground Floor <br /><br />
                        TEL: (0422) 166 88
                    </p>
                </div>

                <div className="image-container">
                    <img src={storeD02Image} alt="store Dubai 02 image" className="image" />
                </div>
            </section>

            <section className="content">
                <div className="text-container">
                    <p className="title">
                        Dubai Arabian Center
                    </p>

                    <p className="text">
                        Ground Floor <br /><br />
                        TEL: (0422) 844 14
                    </p>
                </div>

                <div className="image-container">
                    <img src={storeD03Image} alt="store Dubai 03 image" className="image" />
                </div>
            </section>

            <section className="content">
                <div className="text-container">
                    <p className="title">
                        Dubai Dragon Mart 1
                    </p>

                    <p className="text">
                        Ground Floor <br />
                        Shop number DHG06 <br /><br />
                        TEL: (0455) 836 98
                    </p>
                </div>

                <div className="image-container">
                    <img src={storeD04Image} alt="store Dubai 04 image" className="image" />
                </div>
            </section>

            <section className="content">
                <div className="text-container">
                    <p className="title">
                        Dubai Mall
                    </p>

                    <p className="text">
                        Level 2 <br />
                        Way to Metro Station <br /><br />
                        TEL: (0444) 569 67
                    </p>
                </div>

                <div className="image-container">
                    <img src={storeD05Image} alt="store Dubai 05 image" className="image" />
                </div>
            </section>
        </div>
    );
}

export default DubaiStore;