import { Link } from "react-router-dom"
import BrandLogo from "../brandlogo/brandlogo"
import CartWidget from "../cartwidget/CartWidget"
import { DropMenu } from "../dropmenu/dropmenu"
import "./navbar.scss"

const NavBar = () => {
  return (
    <div className="navigation">
      <ul className="navMenu">
        <li className="menuItem">
          <BrandLogo />
        </li>
        <li className="menuItem">
          <Link to="/">Home</Link>
        </li>
        <li className="menuItem dropdown">
          <DropMenu />
        </li>
        <li className="menuItem">
          <Link to="/sucursales">Sucursales</Link>
        </li>
        <li className="menuItem">
          <CartWidget />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
