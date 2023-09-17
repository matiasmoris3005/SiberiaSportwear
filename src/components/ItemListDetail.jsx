import React from 'react'
import ItemDetail from './ItemDetail'

const ItemListDetail = ({productos}) => {
  return (
    <>
      {productos.map((p)=>{
      return(
        <div key ={p.id}>
           <ItemDetail name = {p.name} price = {p.price} descripcion = {p.descripcion}/>
        </div>
      )
    })}
    </>
  )
}

export default ItemListDetail
