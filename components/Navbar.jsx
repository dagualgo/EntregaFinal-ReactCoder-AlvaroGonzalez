import Logo from "./Logo";
import CartWidget from "./CartWidget";

function Navbar () {
    return (
        <nav className="navbar">
            <Logo />
            <div>
            <ul className="nav-menu">
                <li><a href=""> Inicio</a></li>
                <li><a href=""> Vestimenta</a></li>
                <li><a href=""> Calzados</a></li>
            </ul>
            </div>
            <CartWidget />

        </nav>
    );


}

export default Navbar;