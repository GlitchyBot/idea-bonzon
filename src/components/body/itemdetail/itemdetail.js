import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from "../itemcount/itemcount"
import { CartContext } from "../../../context/CartContext"

export const ItemDetail = ({ book}) => {
  const [cantidad, setCantidad] = useState(0)
  const [botonFinalizar, setBotonFinalizar] = useState(false)
  const { addBook } = useContext(CartContext)

  const iniciarCompra = () => {
    addBook(book.id, book.name, book.price, cantidad)
  }

  const onAdd = (cantidad) => {
    setCantidad(cantidad)
  }

  useEffect(() => {
    if (cantidad !== 0) {
      setBotonFinalizar(true)
    }
  }, [cantidad])

  return (
    <div className="itemDetalle">
      <img src={product.img} alt="product" />
      <h2>{book.name}</h2>
      <h4>{book.author}</h4>
      <h3>{book.category}</h3>
      <h3>${book.price}</h3>
      <ItemCount stock={book.stock} base={1} onAdd={onAdd} />
      {botonFinalizar ? (
        <Link
          to="/carrito"
          className="button2"
          onClick={() => {
            iniciarCompra()
          }}
        >
          Comprar
        </Link>
      ) : null}
      <Link
        className="buttonClose"
        to="/"
        onClick={() => {
          setCantidad(0)
        }}
      >
        Volver
      </Link>
    </div>
  )
}
