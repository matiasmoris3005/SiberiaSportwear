import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Spacer, Box, Flex } from "@chakra-ui/react"

const NavBar = () => {
  return (
    <>
    <Flex style={{ backgroundColor: 'gray' }}>
     <Box p='4'style={{ color: 'white' }}>
        Siberia Sportwear
     </Box>
     <Spacer/>
     <Box p='4' style={{ color: 'white' }}>
     <Menu>
     <MenuButton>
    Productos
     </MenuButton>
    <MenuList>
    <MenuItem style={{ color: 'rgb(128, 128, 128)' }}>Shorts</MenuItem>
    <MenuItem style={{ color: 'rgb(128, 128, 128)' }}>Tops</MenuItem>
    <MenuItem style={{ color: 'rgb(128, 128, 128)' }}>Calzas</MenuItem>
    <MenuItem style={{ color: 'rgb(128, 128, 128)' }}>Remeras</MenuItem>
    </MenuList>
      </Menu>
     </Box>
     <Spacer/>
     <Box p='4' style={{ color: 'white' }}>
     <CartWidget/>
     </Box>
   </Flex>
    </>
  )
}

export default NavBar
