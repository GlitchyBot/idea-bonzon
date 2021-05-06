import { Item } from "../item/item";
import "./itemList.scss"

export const ItemList = ({ books }) => {
  return (
    <div className="contLista">
      <div className="listaLibros">
        {books.map((book) => (
          <Item book={book} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;