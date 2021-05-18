import { Link } from "react-router-dom"
import iconoCarrito from "../../../assets/shopping-cart.png"

const CartWidget = () => {
  return (
    <Link to="/carrito">
      <img className="iconoCarrito" src={iconoCarrito} alt="#" />
    </Link>
  )
}

export default CartWidget;
