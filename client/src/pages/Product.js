import "./Product.css";

import productImage from "../assets/home-product.jpg";

function Product() {
    return (
        <div className="product">
            <img src={productImage} alt="product image" className="image" />
        </div>
    );
}

export default Product;