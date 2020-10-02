import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Motion = styled(motion.div)`
background: #fff;
overflow-x: hidden;
`

export const AboutBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 50px auto;
width: 80%;
@media (max-width: 992px) {
  flex-direction: column;
  }
  @media (max-width: 500px) {
    width: 90%;
  }

`
export const AboutBoxDesktop = styled.div`
display: flex;
@media (max-width: 992px) {
  display: none;
  }

`
export const AboutBoxMobile = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
@media (max-width: 992px) {
  display: flex;
  }

`
export const Content = styled.div`
width: 46%;
margin: 0 40px;
text-align: center;
@media (max-width: 992px) {
  width: 100%;
  }
`
export const MainTitle = styled.h2`
font-size: 2.2rem;
font-style: italic;
margin: 15px auto;
color: #e64215;
`
export const Title = styled.h2`
font-size: 6rem;
text-transform: uppercase;
margin: 15px auto;
color: #222;
@media (max-width: 500px) {
  font-size: 4.5rem;
  }
`
export const Info = styled.p`
font-size: 1.6rem;
margin: 40px auto;
color: #66686a;
@media (max-width: 500px) {
  font-size: 1.4rem;
  }
`
export const ImageBox = styled.div`
width: 46%;
margin: 0 40px;
overflow: hidden;
border-radius: 15px;
@media (max-width: 992px) {
  width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`
export const Image = styled.img`
border-radius: 15px;
transition: all 0.5s ease;
width: 100%;
:hover{
    transform: scale(1.3)
}
`