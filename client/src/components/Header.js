import "bootstrap/dist/css/bootstrap.min.css";
import '../css/header.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  
  

  return (
    <div>
      <Navbar color="red" light expand="md" className="mt-5 nav text-center">
        <NavbarBrand className="logo" href="/">Türkiye Hazır</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto " navbar>
            <NavItem>
              <NavLink className="linkk" to="/sondepremler">
                Son Depremler
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="linkk" to="/depremaninda">
                Deprem Anında
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="linkk" to="/toplanmaalanlari">
                Toplanma Alanlari
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="linkk" to="/cagrimerkezi">
                Çağrı Merkezi
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="link" nav caret>
                Diğer
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink className="dropdown-link" to="/mevzuatlar">
                    MEVZUAT
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="dropdown-link" to="/cagrimerkezi">
                    İLETİŞİM
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button><a style={{textDecoration:'none',color:'black'}} href="tel:112">Acil Çağrı</a></Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
