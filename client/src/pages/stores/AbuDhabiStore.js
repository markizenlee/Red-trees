import storeAD01Image from "../../assets/store-AD01.jpg";

function AbuDhabiStore({ stores, onMapIconClick, pin }) {
    const abudhabi01 = stores.find(
        (store) => store.id === "abu-dhabi-01"
    );

    return (
        <div>
            <section className="content fade-section" id="abu-dhabi-01">
                <div className="text-container">
                    <p className="title">
                        Abu Dhabi Reem Mall
                    </p>

                    <p className="text">
                        Ground Floor <br /><br />
                        TEL: 02-2366572
                    </p>

                    <button
                        className="map-icon"
                        onClick={() => onMapIconClick(abudhabi01)}
                    >
                        <img src={pin} alt="pin" />
                    </button>
                </div>

                <div className="image-container">
                    <img src={storeAD01Image} alt="store Abu Dhabi 01 image" className="image" />
                </div>
            </section>
        </div>
    );
}

export default AbuDhabiStore;