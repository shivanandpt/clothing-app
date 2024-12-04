import "./ProductCard.css";
import { ProductDetailsProps } from "../../pages/products/Product"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice/cartItemSlice";

const ProductCard: React.FC<ProductDetailsProps> = ({
    id,
    name,
    image,
    description,
    price,
}) => {
    const products = useSelector((state: any) => state.products.products)
    const dispatch = useDispatch();
    const handleAddToCart = (productId: number) => {
        const product = products.find((p: any) => p.id === productId);
        dispatch(addToCart({ ...product, quantity: 1 }));
    }
    return (
        <div className="product-card" >
            <NavLink to={`/products/${id}`}>
                <img src={image} alt="Man Hoodie" />
                <h3 className="product-title">{name}</h3>
                <p>{description}</p>
                <div className="size-options">S M L XL</div>
                <div className="price">{price}</div>
            </NavLink>
            <button className="add-to-cart" onClick={() => handleAddToCart(id)}>Add to Cart</button>
        </div>
    );

}

export default ProductCard;