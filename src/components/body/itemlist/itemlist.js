import { Item } from "./item";

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
