import ProductCard from "./ProductCard";

function getCardPosition(index, cardCount) {
    if (cardCount === 1) {
        return 0;
    }

    return (index / (cardCount - 1)) * 100;
}

function ProductDeck({ products }) {
    return (
        <ul className="product-deck" aria-label="Products">
            {products.map((product, index) => {
                const cardPosition = getCardPosition(index, products.length);

                return (
                    <li
                        className="product-deck-item"
                        key={product.id}
                        style={{
                            "--product-position": `${cardPosition}%`,
                            "--product-offset": `${-cardPosition}%`,
                            "--product-layer": index + 1
                        }}
                    >
                        <ProductCard product={product} />
                    </li>
                );
            })}
        </ul>
    );
}

export default ProductDeck;
