import { useEffect, useState } from "react";
import "./itemDetailContainer.scss";
import { ItemDetail } from "../itemDetail/itemdetail";

export const ItemDetailContainer = ({ setModalIsOpen }) => {
  const bookPrueba = {
    id: 1,
    name: "Heartstopper",
    img: "https://contentv2.tap-commerce.com/cover/large/9789877475876_1.jpg?id_com=1113",
    author: "Oseman Alice",
    category: "Literatura juvenil",
    stock: 45,
    price: 899.00,
  };

  const [book, setBook] = useState({});


  const getBooks = new Promise((res, rej) => {
    setTimeout(function () {
      res(bookPrueba);
    }, 2000);
  });

  useEffect(() => {
    getBooks
      .then((res) => setBook(res))
      
  }, []);

  return (
    <div className="contDetalle">
      (<ItemDetail book={book} setModalIsOpen={setModalIsOpen} />)
    </div>
  );
};