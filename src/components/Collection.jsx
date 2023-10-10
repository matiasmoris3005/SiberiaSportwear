// ESTO FUE HECHO COMO EJEMPLO EN CLASE


import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useParams } from 'react-router-dom'

const Collection = () => {

    const {category} = useParams() // si necesito llamar a las distintas categorias lo uso

const [products, setProductos] = useState([])


useEffect(()=>{
    const db = getFirestore()

    console.log(products)

    const itemsCollection = collection(db, `${category}`)
    getDocs(itemsCollection).then((snapshot)=>{
        const docs = snapshot.docs.map((doc)=>doc.data())
        setProductos(docs)
    })
}, [])

  return (
    <div>
    {products.map((product) => (
        <>
        <h3>nombre: {product.name}</h3>
        <h4>$ {product.price}</h4>
        <h5>categoria: {product.category}</h5>
        </>
      ))}
      </div>
  )
}
 
export default Collection


