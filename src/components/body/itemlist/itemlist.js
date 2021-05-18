import { Item } from "./item"

export const ItemList = ({ books }) => {
  return (
    <div className="productListWrapper">
      <div className="productList">
        {books.map((book) => (
          <Item book={book} />
        ))}
      </div>
    </div>
  )
}
