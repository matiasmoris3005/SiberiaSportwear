import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {

    const productos = [
      { id: 1, name: "Short A", price: 6000, descripcion: "Descripción del producto" },
      { id: 2, name: "Short B", price: 6000, descripcion: "Descripción del producto" },
      { id: 3, name: "Top A", price: 5000, descripcion: "Descripción del producto" },
      { id: 4, name: "Top B", price: 5000, descripcion: "Descripción del producto" },
      { id: 5, name: "Calza A", price: 8000, descripcion: "Descripción del producto" },
      { id: 6, name: "Calza B", price: 8000, descripcion: "Descripción del producto" }
    ]

  return (
    <>
      <ItemList productos={productos}/>
    </>
  )
}
  
export default ItemListContainer
