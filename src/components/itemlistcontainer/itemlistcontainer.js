import { ItemList } from "../itemlist/itemList";
import { useEffect, useState } from "react";
import { booksData } from "../libros/booksData";


const ItemListContainer = () => {
  const [books, setBooks] = useState([]);

  const getBooks = new Promise((res, rej) => {
    setTimeout(function () {
      res(booksData);
    }, 2000);
  });

  useEffect(() => {    
    getBooks
      .then((res) => setBooks(res))
      // .catch((err) => alert(err))
    
  }, []);

 
    return <>{<ItemList books={books} />}</>;


};

export default ItemListContainer;