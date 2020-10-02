import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Motion = styled(motion.div)`

`

export const Slide = styled.div`
position: relative;
height: 94vh;
@media (max-width: 992px) {
    width: 100%;
    height: auto;
  }
`
export const Image = styled.img`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  opacity: 1;
`
export const Content = styled.div`
height: 100%;
width: 100%;
color: #fff;
position: absolute;
top: 0;
background-color: rgba(0, 0, 0, 0.5);
text-align: center;
font-weight: 400;
font-size: 7rem;
@media (max-width: 992px) {
  font-size: 5rem;
  }
@media (max-width: 500px) {
  font-size: 3.6rem;
  }
  @media (max-width: 400px) {
  font-size: 2.8rem;
  }
`
export const Header = styled.p`

position: absolute;
margin: 5px;
z-index: 2;
height: 60px;
width: 100%;
top: 30%;

`
export const MainHeader = styled.p`
position: absolute;
height: 60px;
top: 40%;
margin: 5px;
width: 100%;
color: #e64215;
@media (max-width: 992px) {
  top: 45%;
  }
`