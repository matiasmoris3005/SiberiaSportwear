import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const { category } = useParams()
  const products = [
    { id: 1, name: "Short A", category: 'shorts', price: 6000},
    { id: 2, name: "Short B", category: 'shorts', price: 6000},
    { id: 3, name: "Top A", category: 'tops', price: 5000},
    { id: 4, name: "Top B", category: 'tops', price: 5000},
    { id: 5, name: "Calza A", category: 'calzas', price: 8000},
    { id: 6, name: "Calza B", category: 'calzas', price: 8000}
];

const mostrarProducto = new Promise ((resolve, reject) =>{
  if (products.length > 0) {
    setTimeout(()=>{
      resolve({products})
    }, 5000)
  } else {
    reject("No hay productos disponibles")
  }
})

mostrarProducto
.then((resultado)=> {
  console.log(resultado)
})
.catch((error)=>{
  console.log(error)
})

const filteredProducts = products.filter((product) => product.category === category)

return (
  <div>
      <ItemList products={filteredProducts}/>
  </div>
)
}
  
export default ItemListContainer
