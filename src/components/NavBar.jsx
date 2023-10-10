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
                    <Link to={`/category/${'shorts'}`}>
                      <MenuItem style={{ color: 'rgb(128, 128, 128)' }}>Shorts</MenuItem>
                    </Link>
                    <Link to={`/category/${'tops'}`}>  
                      <MenuItem style={{ color: 'rgb(128, 128, 128)' }}>Tops</MenuItem>
                    </Link>
                    <Link to={`/category/${'calzas'}`}>  
                      <MenuItem style={{ color: 'rgb(128, 128, 128)' }}>Calzas</MenuItem>
                    </Link>
                    <Link to={`/${'contacto'}`}>  
                      <MenuItem style={{ color: 'rgb(128, 128, 128)' }}>Contacto</MenuItem>
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
