import { useEffect, useRef, useState } from "react";

function FocusedProduct({ product, onClose }) {
    const [isClosing, setIsClosing] = useState(false);
    const productImage = product.image;
    const exitButtonRef = useRef(null);
    const focusedLayerRef = useRef(null);

    useEffect(() => {
        const scrollPosition = window.scrollY;
        const previousHtmlOverflow = document.documentElement.style.overflow;
        const previousHtmlScrollBehavior = document.documentElement.style.scrollBehavior;
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
            document.documentElement.style.scrollBehavior = "auto";
            window.scrollTo(0, scrollPosition);
            document.documentElement.style.scrollBehavior = previousHtmlScrollBehavior;
        };
    }, []);

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setIsClosing(true);
            }

            if (event.key === "Tab") {
                const focusableElements = focusedLayerRef.current.querySelectorAll(
                    "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
                );
                const firstFocusableElement = focusableElements[0];
                const lastFocusableElement = focusableElements[focusableElements.length - 1];

                if (
                    event.shiftKey
                    && document.activeElement === firstFocusableElement
                ) {
                    event.preventDefault();
                    lastFocusableElement.focus();
                } else if (
                    !event.shiftKey
                    && document.activeElement === lastFocusableElement
                ) {
                    event.preventDefault();
                    firstFocusableElement.focus();
                }
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        exitButtonRef.current.focus();
    }, []);

    function handleClose() {
        setIsClosing(true);
    }

    function handleCloseAnimationEnd(event) {
        if (isClosing && event.target === event.currentTarget) {
            onClose();
        }
    }

    return (
        <div
            className={`focused-product-layer${isClosing ? " closing" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${product.id}-focused-title`}
            onAnimationEnd={handleCloseAnimationEnd}
            ref={focusedLayerRef}
        >
            <button
                className="focused-product-exit"
                type="button"
                aria-label="Close focused product"
                onClick={handleClose}
                ref={exitButtonRef}
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
                    <h2 id={`${product.id}-focused-title`}>
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
