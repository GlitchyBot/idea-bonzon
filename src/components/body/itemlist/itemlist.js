import { Item } from "./item"

export const ItemList = ({ items }) => {
  return (
    <div className="contLista">
      <div className="listaLibros">
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </div>
  )
}
