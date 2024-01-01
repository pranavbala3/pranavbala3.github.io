import * as React from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ChevronDownIcon } from '@chakra-ui/icons';
import './NavBar.css';

interface SubmenuItem {
  name: string;
  link: string;
}

interface HoverDropdownProps {
  title: string;
  link: string;
  submenu: SubmenuItem[];
}

function HoverDropdown({ title, link, submenu }: HoverDropdownProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
 
  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton as={Button} variant="link" fontSize={['xl', 'xl', '2xl']} fontWeight="500" color="#22252A" _hover={{ color: '#009ECF', borderBottom: '2px', borderColor: '#4EC4EF' }} onMouseEnter={onOpen} onMouseLeave={onClose}>
        {title} <ChevronDownIcon />
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        {submenu.map((item, index) => (
          <MenuItem key={index}>
            <NavLink to={item.link}>
              <Button variant="link" fontSize="md" fontWeight="500" color="#22252A" pr="10px" _hover={{ color: '#009ECF', backgroundColor: '#F2F2F2' }}>
                {item.name}
              </Button>
            </NavLink>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
 }

export default HoverDropdown;