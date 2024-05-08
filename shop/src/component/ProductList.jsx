import React from "react";
import Product from "./Product";
import './ProductList.css'

const ProductList = ({products}) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <Product 
                key={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                imageUrl={product.imageUrl}
                />
            ))}
        </div>
    );
};

export default ProductList;