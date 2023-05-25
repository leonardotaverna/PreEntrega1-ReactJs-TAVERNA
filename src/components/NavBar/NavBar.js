import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'; 
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to = "/"> 
                <h3>BlockBuster-X</h3>
            </Link>
            
            <div className="Categories">
                <NavLink to = {`/category/Películas`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}> Películas </NavLink>
                <NavLink to = {`/category/Series`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}> Series </NavLink>
                <NavLink to = {`/category/Documentales`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}> Documentales </NavLink>
                <NavLink to = {`/category/Programas de TV`} className={({ isActive}) => isActive ? "ActiveOption" : "Option"}> Programas de TV </NavLink>
            </div>
            
            <div className="carrito">
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar