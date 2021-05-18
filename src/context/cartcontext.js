import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([])

  const addBook = (id, name, price, cantidad) => {
    const existingIndex = carrito.findIndex((item) => item.id === id)

    if (existingIndex >= 0) {
      carrito[existingIndex] = {
        ...carrito[existingIndex],
        cantidad: cantidad,
      };
    } else {
      setCarrito([
        ...cart,
        {
          id: id,
          name: name,
          price: price,
          cantidad: cantidad,
        },
      ])
    }
  }

  return (
    <CartContext.Provider value={{ addBook, carrito, setCarrito }}>
      {children}
    </CartContext.Provider>
  )
}
