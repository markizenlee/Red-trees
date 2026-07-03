import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const MOBILE_BREAKPOINT = 992;
const defaultZoom = window.innerWidth < MOBILE_BREAKPOINT ? 11 : 12;

function StoreMap({ stores }) {
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
                    />
                ))}
            </Map>
        </APIProvider>
    );
}

export default StoreMap;