import { useEffect } from "react";

function FocusedProduct({ product }) {
    const productImage = product.images[0];

    useEffect(() => {
        const scrollPosition = window.scrollY;
        const previousHtmlOverflow = document.documentElement.style.overflow;
        const previousBodyOverflow = document.body.style.overflow;
        const previousBodyPosition = document.body.style.position;
        const previousBodyTop = document.body.style.top;
        const previousBodyWidth = document.body.style.width;

        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = "100%";

        return () => {
            document.documentElement.style.overflow = previousHtmlOverflow;
            document.body.style.overflow = previousBodyOverflow;
            document.body.style.position = previousBodyPosition;
            document.body.style.top = previousBodyTop;
            document.body.style.width = previousBodyWidth;
            window.scrollTo(0, scrollPosition);
        };
    }, []);

    return (
        <div className="focused-product-layer">
            <button
                className="focused-product-exit"
                type="button"
                aria-label="Close focused product"
            >
            </button>

            <article className="focused-product">
                <span
                    className="focused-product-image"
                    role="img"
                    aria-label={productImage.label}
                    style={{
                        backgroundImage: `linear-gradient(135deg, ${productImage.colors[0]}, ${productImage.colors[1]})`
                    }}
                >
                </span>

                <div className="focused-product-details">
                    <h2>
                        {product.name}
                    </h2>

                    <p>
                        {product.description}
                    </p>
                </div>
            </article>
        </div>
    );
}

export default FocusedProduct;
