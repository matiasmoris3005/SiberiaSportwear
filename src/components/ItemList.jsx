import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
  
  return (
    <>
    {productos.map((p)=>{
      return (
        <Item
        key={p.id}
        id={p.id}
        name={p.name}
        descripcion={p.descripcion}
        />
      )
    })}
    </>
  )
}

export default ItemList
