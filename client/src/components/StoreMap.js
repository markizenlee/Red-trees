import React, { useState } from "react";
import { APIProvider, Map, Marker, InfoWindow } from "@vis.gl/react-google-maps";

const MOBILE_BREAKPOINT = 992;
const defaultZoom = window.innerWidth < MOBILE_BREAKPOINT ? 11 : 12;

function StoreMap({ stores }) {
    const [selectedStore, setSelectedStore] = useState(null);

    function renderPopup() {
        if (!selectedStore) {
            return null;
        }

        return (
            <InfoWindow
                position={{ lat: selectedStore.lat, lng: selectedStore.lng}}
                onCloseClick={() => setSelectedStore(null)}
            >
                <div>
                    <h3>{selectedStore.name}</h3>
                </div>
            </InfoWindow>
        );
    }

    return (
        <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <Map
                defaultCenter={{lat: 25.2691, lng: 55.3347}}
                defaultZoom={defaultZoom}
                style={{
                    height: "100%",
                    width: "100%"
                }}
            >
                {stores.map((store) => (
                    <Marker
                        key={store.id}
                        position={{ lat: store.lat, lng: store.lng }}
                        onClick={() => setSelectedStore(store)}
                    />
                ))}

                {renderPopup()}
            </Map>
        </APIProvider>
    );
}

export default StoreMap;