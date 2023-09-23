import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, /* ButtonGroup, Button */ } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'


const ItemDetail = ({ productos}) => {
  const { id } = useParams();

  const filteredProducts = productos.filter((producto)=> producto.id == id)

  return (
    <div>
      {filteredProducts.map((p)=>{
        return (
          <div key={p.id}>
            <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNheSRzMeUMfkHQM4Cr-mboEXZXKGHsWB4Xw&usqp=CAU'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{p.name}</Heading>
              <Text color='blue.600' fontSize='2xl'>
                {p.price}
              </Text>
              <Text color='blue.600' fontSize='2xl'>
                {p.descripcion}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            
          </CardFooter>
        </Card>
          </div>
        )
      })}
    </div>
  )
}

export default ItemDetail
