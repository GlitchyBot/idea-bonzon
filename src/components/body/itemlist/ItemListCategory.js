import { useEffect, useState } from "react"
import { ItemList } from "./ItemList"
// import { booksData } from "../libros/booksData"
import Loader from "../../loader/loader"
import {getFirestore} from "../../../firebase/index"
import "./itemList.scss"
// import { useParams } from "react-router";

const ItemListCategory = () => {
  // const [books, setBooks] = useState([]);
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  // const { category } = useParams()

  // const getBooks = new Promise((res, rej) => {
  //   setTimeout(function () {
  //     res(booksData)
  //   }, 2000)
  // })

  // useEffect(() => {
  //   setIsLoading(true)
  //   getBooks
  //     .then((res) => {
  //       setBooks(res.filter((item) => item.category === category))
  //     })
  //     .catch((err) => alert(err))
  //     .finally(() => setIsLoading(false))
  // }, [category])
  useEffect(()=> {
    setIsLoading(true)
    const db = getFirestore()
    const items = db.collection("items")
    const cat = items.where('categoryID','==', props.match.params.cat)  
    cat 
       .get()
       .then((snapshot) => {
         const data = snapshot.docs.map((doc) => ({
           id: doc.id,
            ...doc.data(),
         }))
         setItems(data)
       })
  },[props.match.params.cat])

  return <>{isLoading ? <Loader /> : <ItemList items={items} />}</>;
}

export default ItemListCategory;
