import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
//import Button from "../Button/Button";
import "./CartItem.css";
import CheckoutForm from "../CheckoutForm/checkoutForm";
//import { createOrderWithStockUpdate } from "../../services/firebase";
import { useNavigate } from "react-router-dom";


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
  
      try {
        //const id = await createOrderWithStockUpdate(order);
        //console.log("respuesta", id);
        clearCart();
  
        } catch (error) {
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
          <h4>El total de tu compra es de ${totalPrice().toFixed(2)} </h4>
          <CheckoutForm onConfirm={handleConfirm} />
        </div>
      </>
    );
}
  
export default CartContainer;



// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   // Función para agregar un item al carrito
//   const addItemToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   // Función para eliminar un item del carrito
//   const removeItemFromCart = (item) => {
//     const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
//     setCartItems(updatedCart);
//   };

//   return (
//     <div>
//       <h2>Carrito de compras</h2>
//       {cartItems.length === 0 ? (
//         <p>No hay items en el carrito</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item.id}>
//               {item.name} - ${item.price}
//               <button onClick={() => removeItemFromCart(item)}>Eliminar</button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <h3>Agregar items al carrito:</h3>
//       <button onClick={() => addItemToCart({ id: 1, name: 'Producto 1', price: 10 })}>
//         Agregar Producto 1
//       </button>
//       <button onClick={() => addItemToCart({ id: 2, name: 'Producto 2', price: 20 })}>
//         Agregar Producto 2
//       </button>
//     </div>
//   );
// };

// export default Cart;
