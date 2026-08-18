import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";

import "./Product.css";

import ProductCategory from "./product/ProductCategory";
import productCategories from "./product/productData";

function Product() {
    const location = useLocation();
    const activeCategoryId = location.pathname.split("/")[2];

    return (
        <div className="product">
            <nav className="product-navigation" aria-label="Product categories">
                <ul>
                    {productCategories.map(category => (
                        <li key={category.id}>
                            <Link
                                to={`/product/${category.id}`}
                                className={activeCategoryId === category.id ? "active" : ""}
                                aria-current={activeCategoryId === category.id ? "page" : undefined}
                            >
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <main className="product-content">
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
            </main>
        </div>
    );
}

export default Product;
