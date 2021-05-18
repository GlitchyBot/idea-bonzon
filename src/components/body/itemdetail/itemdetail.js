import { Link } from "react-router-dom"
import { ItemCount } from "../itemcount/itemcount"

export const ItemDetail = ({ book }) => {
  const onAdd = (Cantidad) => {
    alert(`Se agreagon ${Cantidad} al carrito.`);
  };

  return (
    <div className="itemDetail">
      <img src={book.img} alt="libro" />
      <h2>{book.name}</h2>
      <h4>${book.price}</h4>
      <ItemCount stock={book.stock} base={1} onAdd={onAdd} />
      <Link className="closeButton" to="/">
        Volver
      </Link>
    </div>
  )
}
