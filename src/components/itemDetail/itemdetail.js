import {AddItem} from "../addItem/addItem"
import "../itemdetailcontainer/itemDetailContainer.scss" 


export const ItemDetail = ({ book, setModalIsOpen }) => {
  const onAdd = (Cantidad) => {
    alert(`Se agregaron ${Cantidad} al carrito.`);
    setModalIsOpen(false);
  };
  
  return (
    <div className="itemDetail">
      <button className="closeButton" onClick={() => setModalIsOpen(false)}>
        X
      </button>
      <img src={book.img} alt="libro" />
      <h2>{book.name}</h2>
      <h4>{book.author}</h4>
      <h3>{book.category}</h3>
      <h3>${book.price}</h3>
      <AddItem stock={book.stock} base={1} onAdd={onAdd} />
    </div>
  );
};