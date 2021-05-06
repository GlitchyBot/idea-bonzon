import cart from './cart.png'

export const CartWidget = () => {
    return (
    <a href="">
      <img className="cart" src={cart} alt="Carrito" />
    </a>
  );
}

export default CartWidget;