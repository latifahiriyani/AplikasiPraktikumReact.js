import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {Button} from 'reactstrap'
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
   
    const {value, setValue} = useContext(CartContext)
    
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/mahasiswa">Mahasiswa</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/kelas">Class</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/hooks">Hook</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/useeffects">Use Effects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/produk">Produk</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button color="danger">
                            <i className="fa fa-shopping-cart"></i>
                        <span className="badge badge-light"> {value}</span>
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default NavbarComp