import "./additem.scss";
import { useState } from "react";

export function AddItem({ stock, base, onAdd }) {
  const [unidades, setUnidades] = useState(base);

  const increment = () => {
    if (unidades < stock) {
      setUnidades(unidades + 1)
    }
  };

  const decrement = () => {
    if (unidades > base) {
      setUnidades(unidades - 1)
    }
  };

  return (
    <div className="contAgregar">
      <div className="agregando">
        <div className="buttons">
          <button className="button" onClick={increment}>
            {" "}
            +{" "}
          </button>
          <div>
            <h3>Cantidad: {unidades}</h3>
          </div>
          <button className="button" onClick={decrement}>
            {" "}
            -{" "}
          </button>
        </div>
        <button className="button" onClick={() => onAdd(unidades)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
