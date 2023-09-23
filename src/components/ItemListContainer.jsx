import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const { category } = useParams()

    const productos = [
        { id: 1, name: "Short A", price: 6000, descripcion: "Descripción del producto", category: 'shorts' },
        { id: 2, name: "Short B", price: 6000, descripcion: "Descripción del producto", category: 'shorts' },
        { id: 3, name: "Top A", price: 5000, descripcion: "Descripción del producto", category: 'tops' },
        { id: 4, name: "Top B", price: 5000, descripcion: "Descripción del producto", category: 'tops' },
        { id: 5, name: "Calza A", price: 8000, descripcion: "Descripción del producto", category: 'calzas' },
        { id: 6, name: "Calza B", price: 8000, descripcion: "Descripción del producto", category: 'calzas' }
    ]

    const mostrarProducto = new Promise ((resolve, reject) =>{
      if (productos.length > 0) {
        setTimeout(()=>{
          resolve({productos})
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

    const filteredProducts = productos.filter((producto) => producto.category === category)
  return (
    <>
      <ItemList 
      productos={filteredProducts}
      />
    </>
  )
}
  
export default ItemListContainer
