import cart from "./assets/cart.png";

function CartWidget() {
    return (
        <div>
            <img src={cart} alt="carrito"/>
            0
        </div>
    );
}
export default CartWidget;