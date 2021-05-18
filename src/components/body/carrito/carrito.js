import { useContext } from "react"
import { CartContext } from "../../../context/cartcontext"
import "./carrito.scss"
import iconoPapelera from "../../../assets/papelera.png"

export const Carrito = () => {
  const { carrito, removeBook } = useContext(CartContext)

  const calcularPrecio = (price, cantidad) => {
    return price * cantidad
  }

  return (
    <div className="contItemCarrito">
      {carrito.length ? (
        carrito.map((book) => (
          <div key={book.id} className="itemsCarrito">
            <h2>{book.name}</h2>
            <h4>Cantidad: {book.cantidad}</h4>
            <h4>${calcularPrecio(book.price, book.cantidad)}</h4>
            <img
              className="iconoPapelera"
              src={iconoPapelera}
              alt="#"
              onClick={() => {
                removeBook(book)
              }}
            />
          </div>
        ))
      ) : (
        <h1>El carrito se encuentra vacío.</h1>
      )}
    </div>
  )
}