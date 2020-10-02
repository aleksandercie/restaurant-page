import styled from 'styled-components';
import {CartCheck} from '@styled-icons/bootstrap/CartCheck';
import { motion } from 'framer-motion';

export const Motion = styled(motion.div)`
background: #fff;
overflow-x: hidden;
`

export const Wrapper = styled.div`
 width: 80%;
 margin: 40px auto;
 color: #222;
 @media (max-width: 700px) {
    width: 90%;
  }
`
export const Title = styled.h3`
font-size: 4rem;
text-align: center;
text-transform: uppercase;
font-weight: 400;
@media (max-width: 500px) {
    font-size: 3rem;
  }
`
export const ProductBox = styled.div`
 display: flex;
 padding: 20px;
 @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
`
export const ImageBox = styled.div`
width: 25%;
min-width: 250px;
overflow: hidden;
margin: 0 20px;
border-radius: 15px;
@media (max-width: 992px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`
export const Image = styled.img`
border-radius: 15px;
transition: all 0.5s ease;
width: 100%;
:hover{
    transform: scale(1.5)
}
`
export const ContentBox = styled.div`
margin: 0 20px;
width: 50%;
color: #222;
`
export const Name = styled.h4`
font-size: 2rem;
text-transform: uppercase;
margin: 15px 0;
font-weight: 400;
`
export const Info = styled.p`
margin: 10px 0;
font-size: 1.6rem;
`
export const Price = styled.p`
margin: 25px 0;
font-size: 2.2rem;
@media (max-width: 992px) {
  margin: 15px 0 0 0;
  }
`

export const CartBox = styled.div`
display: flex;
opacity: 0;
transition: all 0.3s ease;
@media (max-width: 992px) {
  width: 50%;
  margin: 5px 0;
  }
`
export const IconCart = styled(CartCheck)`
width: 20px;
color: #e64215;
`
export const ButtonBox = styled.div`
margin: 0 20px;
width: 40%;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 992px) {
  margin: 10px 20px;
  }

`
export const Button = styled.button`
width: 40%;
min-width: 200px;
border-radius: 7px;
padding: 10px;
font-weight: 600;
font-size: 1.6rem;
text-transform: uppercase;
border: none;
outline: none;
color: #fff;
background-color: #222;
transition: all 0.5s ease;
:hover{
    color: #fff;
    background-color: #e64215;
}
@media (max-width: 992px) {
    width: 60%;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
`