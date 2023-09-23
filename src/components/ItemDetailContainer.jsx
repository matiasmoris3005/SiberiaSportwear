import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const productos = [
        { id: 1, name: "Short A", price: 6000, descripcion: "Descripción del producto", category: 'shorts' },
        { id: 2, name: "Short B", price: 6000, descripcion: "Descripción del producto", category: 'shorts' },
        { id: 3, name: "Top A", price: 5000, descripcion: "Descripción del producto", category: 'tops' },
        { id: 4, name: "Top B", price: 5000, descripcion: "Descripción del producto", category: 'tops' },
        { id: 5, name: "Calza A", price: 8000, descripcion: "Descripción del producto", category: 'calzas' },
        { id: 6, name: "Calza B", price: 8000, descripcion: "Descripción del producto", category: 'calzas' }
    ]

    const getProductos = new Promise((resolve, reject)=>{
      if (productos.length > 0){
        setTimeout(()=>{
          resolve(productos)
        },2000 )
      } else {
        reject(new Error("No hay datos"))
      }
    })

    getProductos
    .then((resultado)=>{
      console.log(resultado)
    })
    .catch((error)=>{
      console.log(error)
    })
  return (
    <>
      <ItemDetail
      productos={(productos)}
      />
    </>
  )
}

export default ItemDetailContainer
