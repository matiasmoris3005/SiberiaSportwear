//ESTO FUE EJEMPLO DE CLASE


import {collection, getFirestore, addDoc} from "firebase/firestore"
import {useState} from "react"

const SetOrder = () => {

    const cart = [
        { id: 1, name: "producto 1", price: 2000}
    ]

    const [orderId, setOrderId] = useState(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const db = getFirestore()

    const handleSubmit=(e)=>{
        e.preventDefault()
        addDoc(orderCollection, order).then(({id})=>
        setOrderId(id))
    }


    const order = {
        buyer: {
            name, email
        },
        items: cart.map(({ id, name, price }) => ({
            id, name, price
        }))
    }

    const orderCollection = collection(db,"orden")
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre y apellido" onChange={(e)=> setName(e.target.value)}/>
        <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
        <button type="submit">Enviar información</button>
      </form>

      Order ID: {orderId}
    </div>
  )
}

export default SetOrder
