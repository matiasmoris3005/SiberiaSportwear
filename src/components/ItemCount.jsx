import React, {useState } from 'react'
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

const ItemCount = () => {

    const [ counter, setCounter ] = useState(0)
    const [ ocultar, setOcultar ] = useState(false)

    const increment = () => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }

    const reset = () => {
        setCounter(0)
    }

    const onAdd =()=>{
        alert(`Agregaste a tu compra ${counter} productos`)
        setOcultar(true)
    }
  return (
    <>
      { !ocultar && ( 
        <>
         <ButtonGroup size='md' isAttached variant='outline'>
           <IconButton onClick={decrement} icon={<MinusIcon/>}></IconButton>
           <Button>{counter}</Button>
           <IconButton onClick={increment} icon={<AddIcon/>}></IconButton>
         </ButtonGroup>
         <Button onClick={onAdd} variant='solid' colorScheme='blue'>Agregar al carrito</Button>
        </>
      )
}
    </>
  )
}

export default ItemCount
