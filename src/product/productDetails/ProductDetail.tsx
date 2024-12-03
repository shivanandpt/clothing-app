import { ProductDetailsProps } from "../Product";
import "./ProductDetail.css"
import React from "react";

const ProductDetail: React.FC<ProductDetailsProps> = ({
    id,
    name,
    image,
    price,
    description,
    collection,
    reviews,
    material,
    color,
    tags,
    addToCart,
}) => {
    return (
        <div className="product-detail-page">
            {/* Product Image Section */}
            <div className="product-image">
                <img src={image} alt={name}></img>
            </div>

            {/* Product Details Section */}
            <div className="product-info">
                <h1 className="product-title">{name}</h1>
                <h3 className="product-collection">{collection}</h3>

                {/* Ratings and Reviews */}
                <div className="ratings">
                    <span className="stars">⭐⭐⭐⭐☆</span>
                    <a href="#reviews" className="reviews-link">
                        ({reviews} Reviews)
                    </a>
                </div>

                {/* Price */}
                <div className="price">{price}€</div>

                {/* Description */}
                <p className="description">{description}</p>

                {/* Options Section */}
                <div className="options">
                    {/* Color Options */}
                    <div className="color-options">
                        <span className="label">Color:</span>
                        <div className="colors">
                            <div className="color red"></div>
                            <div className="color green"></div>
                            <div className="color blue"></div>
                        </div>
                    </div>

                    {/* Size Options */}
                    <div className="size-options">
                        <span className="label">Size:</span>
                        <div className="sizes">
                            <button className="size">36</button>
                            <button className="size">38</button>
                            <button className="size active">40</button>
                            <button className="size">42</button>
                            <button className="size">44</button>
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="quantity-selector">
                        <span className="label">Quantity:</span>
                        <input type="number" min="1" max="10" defaultValue="1" />
                    </div>
                </div>

                {/* Add to Cart Button */}
                <button
                    className="add-to-cart"
                    onClick={() => addToCart && addToCart(id)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
