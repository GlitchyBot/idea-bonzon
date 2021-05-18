import { useEffect, useState } from "react"
import "./itemDetail.scss"
import Loader from "../../loader/loader"
import { ItemDetail } from "./itemdetail"
import { booksData } from "../libros/booksData"
import { useParams } from "react-router"

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [book, setBook] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const getBooks = new Promise((res, rej) => {
    setTimeout(function () {
      res(booksData)
    }, 2000)
  })

  useEffect(() => {
    setIsLoading(true)
    getBooks
      .then((res) => {
        res.forEach((item) => {
          if (item.id === id) {
            setBook(item)
          }
        });
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="contDetalle">
      {isLoading ? <Loader /> : <ItemDetail book={book} />}
    </div>
  )
}
