import ProductCard from "./ProductCard";

const mobileCardVisiblePortion = 0.7;

function getCardPosition(index, cardCount) {
    if (cardCount === 1) {
        return 0;
    }

    return (index / (cardCount - 1)) * 100;
}

function ProductDeck({ products, onProductSelect }) {
    const mobileDeckHeight = 7 * (1 + (products.length - 1) * mobileCardVisiblePortion);

    return (
        <ul
            className="product-deck"
            aria-label="Products"
            style={{ "--product-mobile-deck-ratio": `5 / ${mobileDeckHeight}` }}
        >
            {products.map((product, index) => {
                const cardPosition = getCardPosition(index, products.length);

                return (
                    <li
                        className="product-deck-item"
                        key={product.id}
                        style={{
                            "--product-position": `${cardPosition}%`,
                            "--product-offset": `${-cardPosition}%`,
                            "--product-mobile-offset": `${index * mobileCardVisiblePortion * 100}%`,
                            "--product-layer": index + 1
                        }}
                    >
                        <ProductCard
                            product={product}
                            onSelect={onProductSelect}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default ProductDeck;
