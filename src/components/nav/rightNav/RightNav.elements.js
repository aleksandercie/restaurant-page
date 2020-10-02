import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.ul`
    position: absolute;
    z-index: 4;
    list-style: none;
    display: flex;
    justify-content: center;

  @media (max-width: 992px) {
    flex-flow: column nowrap;
    background-color: #000;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    justify-content: flex-start;
  }
  @media (max-width: 500px) {
  width: 220px;
  padding-left: 10px;
  }
`
export const NavbarItem = styled(NavLink)`
    list-style: none;
    margin: 0 30px;
    padding: 5px 10px;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.5s ease;
    color: #fff; 
    cursor: pointer;
    &:hover{
        color: #e64215;
    }
    &.active {
        color: #e64215;
    }
`