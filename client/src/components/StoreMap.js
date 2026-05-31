import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function StoreMap() {
    return (
        <MapContainer
            center={[25.2157, 55.2962]}
            zoom={13}
            style={{
                height: "100%",
                width: "100%"
            }}
        >
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


        </MapContainer>
    );
}

export default StoreMap;