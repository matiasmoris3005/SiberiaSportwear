import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const products = [
      { id: 1, name: "Short A", price: 6000, description: "Descripción del producto", category: 'shorts' },
      { id: 2, name: "Short B", price: 6000, description: "Descripción del producto", category: 'shorts' },
      { id: 3, name: "Top A", price: 5000, description: "Descripción del producto", category: 'tops' },
      { id: 4, name: "Top B", price: 5000, description: "Descripción del producto", category: 'tops' },
      { id: 5, name: "Calza A", price: 8000, description: "Descripción del producto", category: 'calzas' },
      { id: 6, name: "Calza B", price: 8000, description: "Descripción del producto", category: 'calzas' }
  ]

  const mostrarProducto = new Promise ((resolve, reject) =>{
    if (products.length > 0) {
      setTimeout(()=>{
        resolve({products})
      }, 2000)
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
  return (
    <>
      <ItemDetail
      products={products}
      />
    </>
  )
}


export default ItemDetailContainer



