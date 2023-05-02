import CartWidget from "../CartWidget/CartWidget"

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
            <CartWidget/>
        </nav>
    )
}

export default NavBar