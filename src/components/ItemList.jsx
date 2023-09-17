import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  
  return (
    <>
    {productos.map((p)=>{
      return(
        <div key ={p.id}>
           <Item name = {p.name} price = {p.price} descripcion = {p.descripcion}/>
        </div>
      )
    })}
    </>
  )
}

export default ItemList
