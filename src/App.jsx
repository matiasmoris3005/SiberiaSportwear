import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import ItemDetail from "./components/ItemDetail"
import Tops from "./components/Tops"
import Calzas from "./components/Calzas"
import Short from "./components/Short"



const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <ItemListContainer/>
    <Routes>
    <Route exact path="/cart" element={<Cart />}/>
    <Route exact path="/calzas" element={<Calzas />}/>
    <Route exact path="/tops" element={<Tops />}/>
    <Route exact path="/short" element={<Short />}/>
    <Route exact path="/product/:id" element={<ItemDetail />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App