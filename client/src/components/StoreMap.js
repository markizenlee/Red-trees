import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { APIProvider, Map, Marker, InfoWindow } from "@vis.gl/react-google-maps";

const MOBILE_BREAKPOINT = 992;
const defaultZoom = window.innerWidth < MOBILE_BREAKPOINT ? 11 : 12;

function StoreMap({ stores, selectedStore, setSelectedStore }) {
    const location = useLocation();

    useEffect(() => {
        if (!stores.length) return;

        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    }, [stores, location]);

    function renderPopup() {
        if (!selectedStore) {
            return null;
        }

        return (
            <InfoWindow
                position={{ 
                    lat: selectedStore.lat, 
                    lng: selectedStore.lng
                }}
                onCloseClick={() => setSelectedStore(null)}
            >
                <div>
                    <h3>{selectedStore.name}</h3>

                    <a href={`/stores/${selectedStore.city}#${selectedStore.id}`}>
                        See more →
                    </a>
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