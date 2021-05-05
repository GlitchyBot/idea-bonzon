import './navbar.css'
// import cart from '../../cart.png' 
import Cartwidget from '../cartwidget/cartwidget'


export const Navbar = () => {
  return (
      <header className="topbar">
        <p className="logo">Tienda</p>
        <nav className="navigation">
          <ul className="navMenu">
            <li className="menuItem">
              <a href=''>
              Inicio</a></li>
            <li className="menuItem">
              <a href=''>
              Productos</a></li>
            <li className="menuItem">
              <a href=''>
              Promociones</a></li>
            <li className="menuItem">
              <a href=''>
              Sucursales</a></li>                     
          </ul>
          <Cartwidget/>
          
          </nav>
      </header>
  )
}

export default NavBar;