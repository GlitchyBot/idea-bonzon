import { useEffect, useState } from "react"
import { ItemList } from "./itemlist"
// import { booksData } from "../libros/booksData"
import Loader from "../../loader/loader"
import {getFirestore} from "../../../firebase/index"
import "./itemlist.scss"

const ItemListContainer = () => {
  // const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [items, setItems] = useState({})
  const [resVacio, setResVacio] = useState(false)

  // const getBooks = new Promise((res, rej) => {
  //   setTimeout(function () {
  //     res(booksData)
  //   }, 2000);
  // });

  // useEffect(() => {
  //   setIsLoading(true)
  //   getBooks
  //     .then((res) => setBooks(res))
  //     .catch((err) => alert(err))
  //     .finally(() => setIsLoading(false))
  // }, []);

  // return <>{isLoading ? <Loader /> : <ItemList books={books} />}</>

  useEffect(() => {
    setIsLoading(true)
    const db = getFirestore()
    const itemsCollection = db.collection("items")
    itemsCollection
      .get()
      .then((snapshot) => {
        if (snapshot.size === 0) {
          setResVacio(true)
        }
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
          })
        )
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : resVacio ? (
        <h1>No se encontraron resultados.</h1>
      ) : (
        <ItemList items={items} />
      )}
    </>
  )
}

export default ItemListContainer;
