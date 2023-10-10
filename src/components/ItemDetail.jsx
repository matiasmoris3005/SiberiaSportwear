import React, { useEffect, useState } from 'react'
import { Card, Image, CardBody, CardFooter, Stack, Heading, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount';
import Loading from './Loading';
import { useParams } from 'react-router-dom';


const ItemDetail = ({ products }) => {

  const [loading, setLoading] = useState(true)
  const [elementos, setElementos] = useState([])
  useEffect(()=>{
    setTimeout(()=>{
      setElementos([products])
      setLoading(false)
    },1000)
  }, [])

  if (loading){
    return <Loading/>
  }

  const {id} = useParams();
  const numericId = parseInt(id, 10);

  const filteredProducts = products.filter((product) => product.id === numericId);
return (
  <>
  {filteredProducts.map((products) => (
        <div key={products.id}>
          <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
     <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://acdn.mitiendanube.com/stores/349/401/products/badaka_baja_-7771-6dad9fd0e94c795ccb16811401465651-1024-1024.jpg' alt='Caffe Latte'/>
    <Stack>
       <CardBody>
         <Heading size='md'>{products.name}</Heading>

         <Text py='2'>
           ${products.price}
         </Text>
         <Text py='2'>
           {products.description}
         </Text>
       </CardBody>
       <CardFooter>
         <ItemCount/>
       </CardFooter>
     </Stack>
     </Card>
        </div>
  ))} 
    </>
)
}

export default ItemDetail


