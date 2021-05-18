import { useState } from "react"
import { Link } from "react-router-dom"

export const DropMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    {
      id: "juvenil",
      name: "Literatura juvenil",
    },
    {
      id: "ficcion",
      name: "Ficcion",
    },
    {
      id: "cocina",
      name: "Cocina y bebidas",
    },
    {
      id: "novela",
      name: "Novela",
    },
    {
      id: "policial",
      name: "Policial",
    },
  ];

  return (
    <div className="dropDownContainer">
      <a onClick={() => setIsOpen(!isOpen)}>Generos</a>
      {isOpen ? (
        <ul className="dropDownMenu">
          {categories.map((category) => (
            <Link to={`/genero/${category.id}`}>{category.name}</Link>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
