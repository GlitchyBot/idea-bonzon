import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([])

  const addBook = (id, name, price, cantidad) => {
    const existingIndex = carrito.findIndex((item) => item.id === id)

    if (existingIndex >= 0) {
      carrito[existingIndex] = {
        ...carrito[existingIndex],
        cantidad: carrito[existingIndex].cantidad + cantidad,
      }
    } else {
      setCarrito([
        ...carrito,
        {
          id: id,
          name: name,
          price: price,
          cantidad: cantidad,
        },
      ])
    }
  }

  const removeBook = (itemCarrito) => {
    const existingIndex = carrito.findIndex((item) => item.id === itemCarrito.id)
    const copiarCarrito = Array.from(carrito)

    if (existingIndex >= 0) {
      copiarCarrito.splice(existingIndex, 1)
      setCarrito(copiarCarrito)
    }
  }

  return (
    <CartContext.Provider value={{ addBook, carrito, setCarrito, removeBook }}>
      {children}
    </CartContext.Provider>
  )
}

