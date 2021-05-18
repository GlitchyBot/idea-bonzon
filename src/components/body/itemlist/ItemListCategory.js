import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { booksData } from "../libros/booksData";
import Loader from "../../loader/loader";
import "./itemList.scss";
import { useParams } from "react-router";

const ItemListCategory = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();

  const getBooks = new Promise((res, rej) => {
    setTimeout(function () {
      res(booksData);
    }, 2000);
  });

  useEffect(() => {
    setIsLoading(true);
    getBooks
      .then((res) => {
        setBooks(res.filter((item) => item.category === category));
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, [category]);

  return <>{isLoading ? <Loader /> : <ItemList books={books} />}</>;
};

export default ItemListCategory;
