// ESTO SE HACE EN EL ITEMDETAILCONTAINER


import { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore} from "firebase/firestore"
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const Documents = () => {

    const {id} = useParams()
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const db = getFirestore()
        const oneItem = doc(db, "shorts", `${id}`)
        getDoc(oneItem).then((snapshot)=>{
            if(snapshot.exists()){
                const docs = snapshot.data()
                const docId = snapshot.id
                console.log(docId)
                setProducts(docs)
            }
        })
    }, [])

  return (
    <div>
        <ItemDetail products={products}/>
    </div>
  )
}

export default Documents
