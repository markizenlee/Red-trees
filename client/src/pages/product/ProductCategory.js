function ProductCategory({ category }) {
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
            </div>
        </section>
    );
}

export default ProductCategory;
