import React from 'react'
import { Card, Image, CardBody, CardFooter, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Item = ({ name, price, id }) => {
  return (
    <>
     <div className="item">
     <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
     <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src='https://acdn.mitiendanube.com/stores/349/401/products/badaka_baja_-7771-6dad9fd0e94c795ccb16811401465651-1024-1024.jpg' alt='Caffe Latte'/>
    <Stack>
       <CardBody>
         <Heading size='md'>{name}</Heading>

         <Text py='2'>
           ${price}
         </Text>
       </CardBody>
       <CardFooter>
        <Link to={`/item/${id}`}>
         <Button variant='solid' colorScheme='blue' >
           Detalles
         </Button>
        </Link> 
       </CardFooter>
     </Stack>
     </Card>
     </div>
    </>
  );
};




export default Item



