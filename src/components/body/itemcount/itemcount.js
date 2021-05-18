import "./itemcount.scss"
import { useState } from "react"
import { Link } from "react-router-dom"

export function ItemCount({ stock, base, onAdd }) {
  const [unidades, setUnidades] = useState(base)

  const increment = () => {
    if (unidades < stock) {
      setUnidades(unidades + 1)
    }
  }

  const decrement = () => {
    if (unidades > initial) {
      setUnidades(unidades - 1)
    }
  }

  return (
    <div className="contAgregar">
      <div className="agregando">
        <div className="buttons">
          <button className="button" onClick={increment}>
            {" "}
            +{" "}
          </button>
          <div>
            <h3>Cantidad: {counter}</h3>
          </div>
          <button className="button" onClick={decrement}>
            {" "}
            -{" "}
          </button>
        </div>
        <Link className="button2" onClick={() => onAdd(counter)}>
          Agregar al carrito
        </Link>
      </div>
    </div>
  )
}
