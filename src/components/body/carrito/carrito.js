import { useContext } from "react"
import { CartContext } from "../../../context/cartcontext"
import "./carrito.scss"

export const Carrito = () => {
  const { carrito } = useContext(CartContext)

  const calcularPrecio = (price, cantidad) => {
    return price * cantidad;
  };

  return (
    <div className="contItemCarrito">
      {carrito.length ? (
        carrito.map((book) => (
          <div key={book.id} className="itemsCarrito">
            <h2>{book.name}</h2>
            <h4>Cantidad: {book.cantidad}</h4>
            <h4>${calcularPrecio(book.price, book.cantidad)}</h4>
          </div>
        ))
      ) : (
        <h1>El carrito se encunetra vacio.</h1>
      )}
    </div>
  )
}
