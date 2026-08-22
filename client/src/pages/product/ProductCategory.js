import { useState } from "react";

import FocusedProduct from "./FocusedProduct";
import ProductDeck from "./ProductDeck";

function ProductCategory({ category }) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    function handleProductSelect(product) {
        setSelectedProduct(product);
    }

    return (
        <section
            className="product-category"
            data-category={category.id}
            aria-labelledby={`${category.id}-heading`}
        >
            <header className="product-category-header">
                <h1 id={`${category.id}-heading`}>
                    {category.name}
                </h1>

                <p>
                    {category.introduction}
                </p>
            </header>

            <div className="product-category-products">
                <ProductDeck
                    products={category.products}
                    onProductSelect={handleProductSelect}
                />
            </div>

            {selectedProduct && (
                <FocusedProduct product={selectedProduct} />
            )}
        </section>
    );
}

export default ProductCategory;
