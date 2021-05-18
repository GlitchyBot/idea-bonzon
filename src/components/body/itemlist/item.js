import { Link } from "react-router-dom";

export const Item = ({ book }) => {
  return (
    <>
      <Link className="contLibro" to={`/libro/${product.id}`}>
        <img src={book.img} alt="libro" />
      <h2>{book.name}</h2>
      <h4>{book.author}</h4>
      <h3>{book.category}</h3>
      <h3>${book.price}</h3>
      </Link>
    </>
  )
}
