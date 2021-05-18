import NavBar from "./components/topbar/navbar/NavBar"
import "./App.css"
import ItemListContainer from "./components/body/itemList/ItemListContainer"
import ItemListCategory from "./components/body/itemlist/ItemListCategory"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { ItemDetailContainer } from "./components/body/itemDetail/ItemDetailContainer"
import { Carrito } from "./components/body/carrito/carrito"
import { Sucursales } from "./components/body/sucursales/sucursales"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/sucursales">
            <Sucursales />
          </Route>
          <Route path="/carrito">
            <Carrito />
          </Route>
          <Route path="/genero/:id">
            <ItemListCategory />
          </Route>
          <Route path="/libros/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/">
            <ItemListContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
