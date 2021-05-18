import { useEffect, useState } from "react"
import { ItemList } from "./itemlist"
import { booksData } from "../libros/booksData"
import Loader from "../../loader/loader"
import "./itemlist.scss"

const ItemListContainer = () => {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getBooks = new Promise((res, rej) => {
    setTimeout(function () {
      res(booksData)
    }, 2000);
  });

  useEffect(() => {
    setIsLoading(true)
    getBooks
      .then((res) => setBooks(res))
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false))
  }, []);

  return <>{isLoading ? <Loader /> : <ItemList books={books} />}</>
}

export default ItemListContainer;
