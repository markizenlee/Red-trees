import React, { useEffect, useState } from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";

import "./Stores.css";

import DubaiStore from "./stores/DubaiStore";
import SharjahStore from "./stores/SharjahStore";
import StoreMap from "../components/StoreMap";

function Stores() {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        async function fetchStores() {
            try {
                const response = await fetch("/api/stores");
                const data = await response.json();

                setStores(data);
            } catch (error) {
                console.error("Error fetching stores: ", error);
            }
        }

        fetchStores();
    }, []);

    console.log(stores);

    return (
        <div>
            <section className="store-page">
                <nav className="navigation">
                    <ul>
                        <li>
                            <Link to="/stores/dubai">Dubai</Link>
                        </li>

                        <li>
                            <Link to="/stores/sharjah">Sharjah</Link>
                        </li>
                    </ul>
                </nav>

                <div className="store-content">
                    <Routes>
                        <Route index element={<Navigate to="dubai" replace />} />

                        <Route path="dubai" element={<DubaiStore />} />
                        <Route path="sharjah" element={<SharjahStore />} />
                    </Routes>
                </div>
            </section>

            <section className="map-section">
                <StoreMap stores={stores} />
            </section>
        </div>
    );
}

export default Stores;