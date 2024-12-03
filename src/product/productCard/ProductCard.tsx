import "./ProductCard.css";
import { ProductDetailsProps } from "../Product"

const ProductCard: React.FC<ProductDetailsProps> = ({
    id,
    name,
    image,
    description,
    price,
}) => {

    return (
        <div className="product-card" >
            <img src={image} alt="Man Hoodie" />
            <h3 className="product-title">{name}</h3>
            <p>{description}</p>
            <div className="size-options">S M L XL</div>
            <div className="price">{price}</div>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );

}

export default ProductCard;