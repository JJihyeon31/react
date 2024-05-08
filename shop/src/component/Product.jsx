import React from "react";
import './Product.css'

const Product = ({ name, category, price, imageUrl }) => {
    return (
        <div className="product-container">
            <div className="product">
                <div className="product-image">
                    <img src={imageUrl} alt={name} />
                </div>
                <div className="product-info">
                    <h3>{name}</h3>
                    <p>{price}</p>
                    {/* <p>{category}</p> */}
                    <button>상세페이지</button>
                </div>
            </div>
        </div>
    );
};

export default Product;