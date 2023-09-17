import React from 'react'
import { Button, Image } from '@chakra-ui/react'

const Calzas = () => {
  return (
    <>
    <Image
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNheSRzMeUMfkHQM4Cr-mboEXZXKGHsWB4Xw&usqp=CAU'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
      />
      <h2>Calza A</h2>
      <p>$ 8000</p>
      <Button variant='solid' colorScheme='blue'> 
           Agregar al carrito
      </Button>
      <Image
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNheSRzMeUMfkHQM4Cr-mboEXZXKGHsWB4Xw&usqp=CAU'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
      />
      <h2>Calza B</h2>
      <p>$ 8000</p>
      <Button variant='solid' colorScheme='blue'> 
           Agregar al carrito
      </Button>
    </>
  )
}

export default Calzas
