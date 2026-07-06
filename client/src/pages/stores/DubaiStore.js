import storeD01Image from "../../assets/store-D01.jpg";
import storeD02Image from "../../assets/store-D02.jpg";
import storeD03Image from "../../assets/store-D03.jpg";
import storeD04Image from "../../assets/store-D04.jpg";
import storeD05Image from "../../assets/store-D05.jpg";

function DubaiStore({ stores, onMapIconClick, pin }) {
    const dubai01 = stores.find(
        (store) => store.id === "dubai-01"
    );
    
    const dubai02 = stores.find(
        (store) => store.id === "dubai-02"
    );

    const dubai03 = stores.find(
        (store) => store.id === "dubai-03"
    );

    const dubai04 = stores.find(
        (store) => store.id === "dubai-04"
    );

    const dubai05 = stores.find(
        (store) => store.id === "dubai-05"
    );

    return (
        <div>
            <section className="content fade-section" id="dubai-01">
                <div className="text-container">
                    <p className="title">
                        Dubai Burjuman Center
                    </p>

                    <p className="text">
                        First Floor <br /><br />
                        TEL: 04-5524786
                    </p>

                    <button
                        className="map-icon"
                        onClick={() => onMapIconClick(dubai01)}
                    >
                        <img src={pin} alt="pin" />
                    </button>
                </div>

                <div className="image-container">
                    <img src={storeD01Image} alt="store Dubai 01 image" className="image" />
                </div>
            </section>

            <section className="content fade-section" id="dubai-02">
                <div className="text-container">
                    <p className="title">
                        Dubai Al Ghurair Center
                    </p>

                    <p className="text">
                        Ground Floor <br /><br />
                        TEL: 04-2216688
                    </p>

                    <button
                        className="map-icon"
                        onClick={() => onMapIconClick(dubai02)}
                    >
                        <img src={pin} alt="pin" />
                    </button>
                </div>

                <div className="image-container">
                    <img src={storeD02Image} alt="store Dubai 02 image" className="image" />
                </div>
            </section>

            <section className="content fade-section "id="dubai-03">
                <div className="text-container">
                    <p className="title">
                        Dubai Arabian Center
                    </p>

                    <p className="text">
                        Ground Floor <br /><br />
                        TEL: 04-2284414
                    </p>

                    <button
                        className="map-icon"
                        onClick={() => onMapIconClick(dubai03)}
                    >
                        <img src={pin} alt="pin" />
                    </button>
                </div>

                <div className="image-container">
                    <img src={storeD03Image} alt="store Dubai 03 image" className="image" />
                </div>
            </section>

            <section className="content fade-section" id="dubai-04">
                <div className="text-container">
                    <p className="title">
                        Dubai Dragon Mart 1
                    </p>

                    <p className="text">
                        Ground Floor <br />
                        Shop number DHG06 <br /><br />
                        TEL: 04-5583698
                    </p>

                    <button
                        className="map-icon"
                        onClick={() => onMapIconClick(dubai04)}
                    >
                        <img src={pin} alt="pin" />
                    </button>
                </div>

                <div className="image-container">
                    <img src={storeD04Image} alt="store Dubai 04 image" className="image" />
                </div>
            </section>

            <section className="content fade-section" id="dubai-05">
                <div className="text-container">
                    <p className="title">
                        Dubai Mall
                    </p>

                    <p className="text">
                        Level 2 <br />
                        Way to Metro Station <br /><br />
                        TEL: 04-4456967
                    </p>

                    <button
                        className="map-icon"
                        onClick={() => onMapIconClick(dubai05)}
                    >
                        <img src={pin} alt="pin" />
                    </button>
                </div>

                <div className="image-container">
                    <img src={storeD05Image} alt="store Dubai 05 image" className="image" />
                </div>
            </section>
        </div>
    );
}

export default DubaiStore;