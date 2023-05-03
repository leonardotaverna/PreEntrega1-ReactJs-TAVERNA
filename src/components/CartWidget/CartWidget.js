import cart from "./assets/cart.png";
import './CartWidget.css';

function CartWidget() {
    return (
        <div className ="icon">
            <img src={cart} alt="carrito"/>
            0
        </div>
    );
}
export default CartWidget;