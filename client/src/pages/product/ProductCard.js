function ProductCard({ product, onSelect }) {
    const productImage = product.image;

    function handleClick(event) {
        onSelect(product, event.currentTarget);
    }

    return (
        <button
            className="product-card"
            type="button"
            aria-label={product.name}
            onClick={handleClick}
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
        </button>
    );
}

export default ProductCard;
