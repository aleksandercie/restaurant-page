import React from 'react';
import {NavbarContainer, NavbarItem} from './RightNav.elements'

const RightNav = ({ open }) => {
  return (
    <NavbarContainer open={open}>
        <NavbarItem exact to="/">Home</NavbarItem>
        <NavbarItem to="/about">About</NavbarItem>
        <NavbarItem to="/menu">Menu</NavbarItem>
        <NavbarItem to="/reservation">Reservation</NavbarItem>
        <NavbarItem to="/cart">Cart</NavbarItem>
        <NavbarItem to="/contact">Contact</NavbarItem>
    </NavbarContainer>
  )
}

export default RightNav