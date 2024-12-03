import "./ProductCard.css";
import { ProductDetailsProps } from "../Product"
import { NavLink } from "react-router-dom";

const ProductCard: React.FC<ProductDetailsProps> = ({
    id,
    name,
    image,
    description,
    price,
}) => {

    return (
        <div className="product-card" >
            <NavLink to={`/products/${id}`}>
                <img src={image} alt="Man Hoodie" />
                <h3 className="product-title">{name}</h3>
                <p>{description}</p>
                <div className="size-options">S M L XL</div>
                <div className="price">{price}</div>
            </NavLink>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );

}

export default ProductCard;