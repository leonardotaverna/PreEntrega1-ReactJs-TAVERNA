import { useParams } from "react-router-dom";
import './checkout.css'

 
function CheckoutCompra (){
    const { orderidCompra } = useParams();
    return (
    <div className="checkoutCompra">
        <h2>El ID de su orden de compra es: {orderidCompra}</h2>
        <p>¡Muchas gracias por su compra!</p>       
    </div>
    )
}

export default CheckoutCompra