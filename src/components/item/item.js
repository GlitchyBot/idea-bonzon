export const Item = ({ book }) => {
  return (
    <div >
      <img src={book.img} alt="libro" />
      <h2>{book.name}</h2>
      <h4>{book.author}</h4>
      <h3>${book.price}</h3>
    </div>
  );
};

