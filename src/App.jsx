import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  const greeting = "Bienvenidos a Siberia Sportwear"

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App