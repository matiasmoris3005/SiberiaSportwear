import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'

const Item = ({name, id, category }) => {
  return (
    <>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNheSRzMeUMfkHQM4Cr-mboEXZXKGHsWB4Xw&usqp=CAU'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{name}</Heading>
              <Text color='blue.600' fontSize='2xl'>
                {category}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue'>
                <Link to={`/item/${id}`}>
                  Detalles
                </Link>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
    </>
  )
}

export default Item
