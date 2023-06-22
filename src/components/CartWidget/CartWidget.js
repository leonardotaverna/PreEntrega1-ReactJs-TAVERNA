import cart from "./assets/cart.png";
import './CartWidget.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () =>{

    const { totalQuantity } = useContext (CartContext)

    return (
        <Link to = '/cart' className="CartWidget">
            <img className="CartImg" src = {cart} alt ='cart-widget'/>
            {totalQuantity}
        </Link>

        // <div className ="icon">
        //     <img src={cart} alt="carrito"/>
        //     0
        // </div>
    );
}
export default CartWidget;