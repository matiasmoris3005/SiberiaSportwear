import React, { useEffect, useState } from 'react'
import Item from './Item'
import Loading from './Loading';


const ItemList = ({ products }) => {

  const [loading, setLoading] = useState(true)
  const [elementos, setElementos] = useState([])
  useEffect(()=>{
    setTimeout(()=>{
      setElementos([products])
      setLoading(false)
    },1500)
  }, [])

  if (loading){
    return <Loading/>
  }

  return (
    <div>
      {products.map(product => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default React.memo(ItemList)
