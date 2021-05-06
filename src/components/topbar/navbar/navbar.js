import './navbar.scss'
// import cart from '../../cart.png' 
import CartWidget from '../cartwidget/cartwidget'


export const Navbar = () => {
  return (
      <header className="topBar">
        
        <nav className="navigation">
          
          <ul className="navMenu">
            <p className="logo"><a href=''>
              Tienda</a></p>
            <li className="menuItem">
              <a href=''>
              Inicio</a></li>
            <li className="menuItem">
              <a href=''>
              Genero</a></li>
            <li className="menuItem">
              <a href=''>
              Promociones</a></li>
            <li className="menuItem">
              <a href=''>
              Sucursales</a></li>
            <li className="menuItem"><CartWidget/></li>                     
          </ul>
          
          
          </nav>
      </header>
  )
}

export default Navbar;