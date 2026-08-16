function ProductCard({ product }) {
    const productImage = product.images[0];

    return (
        <button
            className="product-card"
            type="button"
            aria-label={`${product.name}. ${product.summary}`}
        >
            <span
                className="product-card-image"
                role="img"
                aria-label={productImage.label}
                style={{
                    backgroundImage: `linear-gradient(135deg, ${productImage.colors[0]}, ${productImage.colors[1]})`
                }}
            >
            </span>

            <span className="product-card-footer">
                <span className="product-card-name">
                    {product.name}
                </span>

                <span className="product-card-summary">
                    {product.summary}
                </span>
            </span>
        </button>
    );
}

export default ProductCard;
