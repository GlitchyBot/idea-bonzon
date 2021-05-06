import { useState } from "react";
import { ItemDetailContainer } from "../itemdetailcontainer/itemdetailcontainer";


export const Item = ({ book }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
   <> 
    <div >
    <div className="contlibro" onClick={() => setModalIsOpen(true)}></div>  
      <img src={book.img} alt="libro" />
      <h2>{book.name}</h2>
      <h4>{book.author}</h4>
      <h3>{book.category}</h3>
      <h3>${book.price}</h3>
    </div>
    {modalIsOpen ? (
        <ItemDetailContainer setModalIsOpen={setModalIsOpen} />
      ) : null}
    </>  
  );
};

