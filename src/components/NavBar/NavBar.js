import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'; 

const NavBar = () => {
    return (
        <nav>
            <h3>BlockBuster-X</h3>
            <div>
                <ul>
                    <li><a href="películas">Películas</a></li>
                    <li><a href="series">Series</a></li>
                    <li><a href="documentales">Documentales</a></li>
                    <li><a href="programas de tv">Programas de TV</a></li>
                </ul>   
            </div>
            
            <div className="carrito">
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar