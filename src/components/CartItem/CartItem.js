import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./CartItem.css";
import CheckoutForm from "../CheckoutForm/checkoutForm";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../services/firebase/firebaseConfig";


function CartContainer() {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);
  const navigateTo = useNavigate();
  
  async function handleConfirm(userData) {
    const order = {
      items: cart,
      buyer: userData,
      date: new Date(),
      price: totalPrice(),
    };

    const idCompra = await createOrder(order);
    console.log ("Su orden de compra es", idCompra);

    navigateTo (`/checkout-compra/${idCompra}`);
      
    try {
      clearCart();
    } 
      
    catch (error) {
      alert(error);
    }
  }
  
  return (
    <>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              <td>{item.name}</td>
              <td>$ {item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button color="#d95555" onClick={() => removeItem(item.id)}>
                  X
                </button>
              </td>
              <th>$ {(item.price * item.quantity).toFixed(2)}</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El valor total de tu compra es de ${totalPrice().toFixed(2)} </h4>
        <CheckoutForm onConfirm={handleConfirm} />
      </div>
    </>
  );
}
  
export default CartContainer;