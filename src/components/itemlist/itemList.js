import { Item } from "../item/item";

export const ItemList = ({ books }) => {
  return (
    <div>
      <div>
        {books.map((book) => (
          <Item book={book} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;