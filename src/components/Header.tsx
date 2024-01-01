import * as React from "react";
import { Box, Flex, Image, Button, ButtonGroup, Drawer, Stack, Divider, List, ListItem, Text, Collapse, Heading } from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink, Link } from "react-router-dom";
import HoverDropdown from "./HoverDropdown";
import { ColorModeSwitcher } from "./ColorModeSwitcher"
// import logo from '../logo.png'

import './NavBar.css'

interface HeaderProps {
  window?: () => Window;
}

const Header: React.FC<HeaderProps> = ({ window }) => {
const drawerWidth = 300;
 const [mobileOpen, setMobileOpen] = React.useState(false);
 const container = window !== undefined ? () => window().document.body : undefined;

 const handleDrawerToggle = () => {
   setMobileOpen((prevState) => !prevState);
 }; 

 const linkStyle = {
   textDecoration: "none",
   color: "#ffffff", 
 };

 const btnStyle = {
   textTransform: 'unset !important', 
   fontSize: 'max(20px, 1.5vw)',
   fontFamily: 'Poppins', 
   borderRadius: '0px',
   fontWeight: '500', 
   color: '#22252A',
   px: '20px',
   mx: '5px',
   _hover: {
     color: '#009ECF',
     transition: 'all 0.3s',
     borderTop: 'solid 2px #4EC4EF',
     borderBottom: 'solid 2px #4EC4EF',
   },
 }

 const listBtnStyle = {
   textTransform: 'unset !important', 
   textAlign: 'center',
   width: '100%',
   fontSize: '20px',
   fontFamily: 'Poppins', 
   borderRadius: '0px',
   color: '#401E46',
   px: '5px',
   _hover: {
     color: '#009ECF',
     backgroundColor: '#F2F2F2',
   },
 }

 const aboutSub = [
   {
     name: 'Facilitators', 
     link: '/about/facilitators', 
   }
 ]

 const contactSub = [
   {
     name: 'FAQs', 
     link: '/contact/faqs', 
   }
 ];

 return (
   <Box>
     <Box position="static" sx={{backgroundColor: '#EBEBEB' ,py: 2, }}>
       <Flex className="nav-bar-bar" sx={{ justifyContent: "space-between", align: 'center' }}>
         <Box sx={{ display: {xs: 'none', sm: 'block'} }}>     
           <NavLink to="/" style={{color:'#000000'}}>
              <Heading>Pranav Balabhadra</Heading>
           </NavLink>
         </Box>
         <Stack id='navbar' spacing={0} direction="row" sx={{ display: { xs: "none", md: "block"}, }}>
           <HoverDropdown title="About Us" link='/about' submenu={aboutSub} />
           <NavLink to='/sessions' id='sessions'>
             <Button variant='text' sx={btnStyle}>
               Sessions
             </Button>
           </NavLink>
           <NavLink to='/resources' >
             <Button variant='text' sx={btnStyle}>
               Resources
             </Button>
           </NavLink>
           <HoverDropdown title="Contact" link='/contact' submenu={contactSub} />
         </Stack>
         <Button
           color="#009ECE"
           aria-label="open drawer"
           // edge="end"
           size='large'
           onClick={handleDrawerToggle}
           sx={{ mr: "1vh", display: { md: "none" } }}
         >
           <ChevronDownIcon sx={{color: '#009ECE'}} />
         </Button>
       </Flex>
     </Box>

     <Box as="nav">
     <Drawer
        placement='right'
        variant="temporary"
        isOpen={mobileOpen}
        onClose={handleDrawerToggle}
        >
         <Box 
           onClick={handleDrawerToggle} sx={{ textAlign: "center" }}
         >
           <Stack direction='column' sx={{my: '2.5vw'}}>
             <div style={{margin: '5px 0'}}>
               <Button rightIcon={<CloseIcon />} />
             </div>
             <NavLink to='/about' >
              <Button sx={listBtnStyle}>
                About
              </Button>
            </NavLink> 
            <NavLink to='/about/facilitators' >
              <Button sx={listBtnStyle}>
                Meet the Facilitators
              </Button>
            </NavLink> 
            <NavLink to='/sessions'>
              <Button sx={listBtnStyle}>
                Sessions
              </Button>
            </NavLink>
            <NavLink to='/resources'>
              <Button sx={listBtnStyle}>
                Resources
              </Button>
            </NavLink>
            <NavLink to='/contact'>
              <Button sx={listBtnStyle}>
                Contact
              </Button>
            </NavLink>
            <NavLink to='/contact/faqs'>
              <Button sx={listBtnStyle}>
                FAQs
              </Button>
            </NavLink>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  </Box>
 );
}

export default Header;