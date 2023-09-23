import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import Contacto from "./components/Contacto"
import ItemDetailContainer from "./components/ItemDetailContainer"


const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      {/* <ItemListContainer/> */}
      <Routes>
       <Route exact path="/" element={<ItemListContainer />}/>
       <Route exact path="/contacto" element={<Contacto />}/>
       <Route exact path="/cart" element={<Cart />}/>
       <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
       <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App