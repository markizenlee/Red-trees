import { Routes, Route, Navigate } from "react-router-dom";

import "./Product.css";

import ProductCategory from "./product/ProductCategory";
import productCategories from "./product/productData";

function Product() {
    return (
        <div className="product">
            <Routes>
                <Route index element={<Navigate to="rings" replace />} />

                {productCategories.map(category => (
                    <Route
                        key={category.id}
                        path={category.id}
                        element={<ProductCategory category={category} />}
                    />
                ))}

                <Route path="*" element={<Navigate to="rings" replace />} />
            </Routes>
        </div>
    );
}

export default Product;
