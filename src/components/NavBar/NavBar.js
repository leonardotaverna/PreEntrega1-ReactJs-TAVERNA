import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'; 

const NavBar = () => {
    return (
        <nav>
            <h3>BlockBuster-X</h3>
            <div>
                <button>Películas</button>
                <button>Series</button>
                <button>Documentales</button>
                <button>Programas de TV</button>
            </div>
            <div className="carrito">
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar