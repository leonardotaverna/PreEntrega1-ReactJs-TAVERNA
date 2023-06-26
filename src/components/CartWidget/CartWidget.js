import cart from "./assets/cart.png";
import './CartWidget.css';
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const CartWidget = () =>{

    const { totalQuantity } = useContext (CartContext)

    return (
        <Link to = '/cart' className="CartWidget">
            <img className="CartImg" src = {cart} alt ='cart-widget'/>
            <span> {totalQuantity()} </span>
        </Link>
    );
}
export default CartWidget;