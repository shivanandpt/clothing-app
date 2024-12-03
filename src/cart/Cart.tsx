import { useDispatch, useSelector } from "react-redux";
import './Cart.css'
import { removeFromCart, increaseQuantity, decreaseQuantity} from "../store/cartSlice/cartItemSlice";

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems.cartItems);
    const dispatch = useDispatch();
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 10.00; // Flat rate shipping
    const total = subtotal + shipping;
    const handleDelete = (id) => {
        dispatch(removeFromCart(id));
    };
    const addQuantity = (id) => {
        dispatch(increaseQuantity(id));
    }
    const removeQuantity = (id) => {
        dispatch(decreaseQuantity(id));
    }
    return (
        <div className="cart-container">
            {/* Shopping Cart Section */}
            <div className="cart-items">
                <h2>Shopping Cart</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Size</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td className="product-info">
                                    <img src={item.image} alt={item.name} />
                                    <span>{item.name}</span>
                                </td>
                                <td>{item.size}</td>
                                <td>
                                    <div className="quantity-controls">
                                        <button onClick={() => removeQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => addQuantity(item.id)}>+</button>
                                    </div>
                                </td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                                <td>
                                    <button className="remove-item" onClick={() => handleDelete(item.id)}>X</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="continue-shopping">Continue Shopping</button>
            </div>

            {/* Payment Info Section */}
            <div className="payment-info">
                <h2>Payment Info</h2>
                <div className="payment-methods">
                    <label>
                        <input type="radio" name="payment" defaultChecked />
                        Credit Card
                    </label>
                    <label>
                        <input type="radio" name="payment" />
                        PayPal
                    </label>
                </div>
                <form>
                    <div className="form-group">
                        <label>Name on Card</label>
                        <input type="text" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label>Card Number</label>
                        <input type="text" placeholder="**** **** **** 3217" />
                    </div>
                    <div className="form-group inline">
                        <div>
                            <label>Expiration Date</label>
                            <input type="text" placeholder="MM/YY" />
                        </div>
                        <div>
                            <label>CVV</label>
                            <input type="text" placeholder="123" />
                        </div>
                    </div>
                </form>
                <div className="order-summary">
                    <div>
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div>
                        <span>Shipping:</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="total">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
                <button className="checkout-btn">Check Out</button>
            </div>
        </div>
    );
};

export default Cart;
