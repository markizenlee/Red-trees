import { Link, Routes, Route } from "react-router-dom";

import "./Stores.css";

import DubaiStore from "./stores/DubaiStore";
import SharjahStore from "./stores/SharjahStore";

function Stores() {
    return (
        <div className="store-page">
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

            <main className="store-content">
                <Routes>
                    <Route path="dubai" element={<DubaiStore />} />
                    <Route path="sharjah" element={<SharjahStore />} />
                </Routes>
            </main>
        </div>
    );
}

export default Stores;