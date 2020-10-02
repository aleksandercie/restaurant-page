import styled from 'styled-components';

export const Nav = styled.nav`
    width: 100%;  
    font-size: 1.5rem;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: #000;
    color: #fff;
    -webkit-box-shadow: 0px 6px 25px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 6px 25px -8px rgba(0,0,0,0.75);
    box-shadow: 0px 6px 25px -8px rgba(0,0,0,0.75);
    @media (max-width: 992px) {
        font-size: 2rem;
    }
`