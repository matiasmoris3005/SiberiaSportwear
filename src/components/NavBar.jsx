import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Spacer, Box, Flex } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
       <Flex style={{ backgroundColor: 'gray' }}>
          <Box p='4'style={{ color: 'white' }}>
             <Link to={"/"}>
               Siberia Sportwear
             </Link>
          </Box>
          <Spacer/>
          <Box p='4' style={{ color: 'white' }}>
             <Menu>
                <MenuButton>
                  Catálogo
                </MenuButton>
                <MenuList>
                    <Link to={`/short`}>
                      <MenuItem style={{ color: 'rgb(128, 128, 128)' }}>Shorts</MenuItem>
                    </Link>
                    <Link to={`/tops`}>  
                      <MenuItem style={{ color: 'rgb(128, 128, 128)' }}>Tops</MenuItem>
                    </Link>
                    <Link to={`/calzas`}>  
                      <MenuItem style={{ color: 'rgb(128, 128, 128)' }}>Calzas</MenuItem>
                    </Link>
                </MenuList>
             </Menu>
          </Box>
          <Spacer/>
          <Box p='4' style={{ color: 'white' }}>
            <Link to={"/cart"}>
              <CartWidget/>
            </Link>
           </Box>
       </Flex>
    </>
  )
}

export default NavBar
