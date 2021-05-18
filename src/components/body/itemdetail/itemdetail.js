import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from "../itemcount/itemcount"

export const ItemDetail = ({ book }) => {
  const [cantidad, setCantidad] = useState(0)
  const [finishButton, setFinishButton] = useState(false)

  const onAdd = (cantidad) => {
    setCantidad(cantidad)
  };

  useEffect(() => {
    if (cantidad !== 0) {
      setFinishButton(true)
    }
  }, [cantidad]);

  return (
    <div className="itemDetalle">
      <img src={book.img} alt="libro" />
      <h2>{book.name}</h2>
      <h4>{book.author}</h4>
      <h3>{book.category}</h3>
      <h3>${book.price}</h3>
      <ItemCount stock={book.stock} base={1} onAdd={onAdd} />
      {finishButton ? (
        <Link
          to="/carrito"
          className="button2"
          onClick={() => {
            setCantidad(0)
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
