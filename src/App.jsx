import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Contacto from "./components/Contacto"
import React from 'react';



/* import ShoppingCartContext from "./context/ShoppingCartContext"
import ComponenteA from "./components/ComponenteA" */

/* import SetOrder from "./components/SetOrder"
import Documents from "./components/Documents" */



/* import Documents from "./components/Documents" 
 */

/* import ComponenteVisible from "./components/ComponenteVisible" */





const App = () => {

  /* const handClick = (e) => {
    console.log(e.target.innerWidth)
  }
  window.addEventListener("resize", handClick) */


  /* const sinVocales = (e)=> {
    if(
      e.key === "a" ||
      e.key === "e" ||
      e.key === "i" ||
      e.key === "o" ||
      e.key === "u" 
    ){
      e.preventDefault()
    }else{
      console.log(e.key)
    }
  } */





  /* const isVisible = false
  {isVisible && <ComponenteVisible/>} */
  //Cart.length > 0 => formulario  IMPORTANTE





  /* miVariable = false  */
  /* {miVariable || <ItemListContainer/>} */ //Importante, usamos el operador "or", es uno u otro dependiendo si es true o false

  return (
    <>
  
  {/* <Collection/> */}

{/* <Documents/> */}

{/* <SetOrder/> */}




    
    <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/contacto" element={<Contacto/>}/>
       <Route exact path="/cart" element={<Cart />}/>
       <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
       <Route exact path="/category/:category" element={<ItemListContainer />}/>
      </Routes>
    </BrowserRouter>
    



    {/* <input type="text" onKeyDown={sinVocales} /> */}


    {/* <Form/> */}



    {/* <ItemCount/> */}



    {/* <ShoppingCartContext>
      <ComponenteA/>
    </ShoppingCartContext> */}


    </>
  )
}

export default App