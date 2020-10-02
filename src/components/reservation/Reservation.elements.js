import styled from 'styled-components';
import { motion } from 'framer-motion';
import ReactSelect from 'react-select';

export const Motion = styled(motion.div)`
background: #fff;
overflow-x: hidden;
`
export const Wrapper = styled.div`
width: 70%;
margin: 50px auto;
color: #222;
@media (max-width: 1400px) {
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }

`
export const Title = styled.h2`
text-align: center;
margin: 20px auto;
text-transform: uppercase;
font-size: 3rem;
`
export const InputContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
@media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`
export const InputBox = styled.div`
display: flex;
flex-direction: column;
padding: 10px 20px;
width: 26%;
min-width: 280px;
@media (max-width: 820px) {
    padding: 10px 0;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

`
export const Label = styled.label`
margin: 10px 0;
font-size: 1.8rem;
`
export const Input = styled.input`
padding: 10px;
border-radius: 7px;
border: 1px solid #ccc;
color: #222;
transition: all 0.5s ease;
width: 300px;
box-sizing: border-box;
:focus{
    color: #222;
    outline-color: #e64215;
    outline: none;
}
::placeholder{
    color: #222;
}
@media (max-width: 500px) {
    width: 250px;
  }
`
export const MultiSelect = styled(ReactSelect)`
font-size: 1.3rem;
width: 300px;
@media (max-width: 500px) {
    width: 250px;
  }
`

export const ButtonBox = styled.div`
margin: 20px auto;
padding: 0 20px;
display: flex;
justify-content: center;
@media (max-width: 400px) {
    padding: 0;
  }
`
export const Button = styled.button`
min-width: 380px;
margin-top: 30px;
border-radius: 7px;
padding: 15px 10px;
font-weight: 600;
font-size: 1.6rem;
text-transform: uppercase;
border: none;
color: #fff;
background-color: #222;
transition: all 0.5s ease;
:hover{
    background-color: #34a853;
}
@media (max-width: 500px) {
    width: 320px;
    min-width: 320px;
  }
  @media (max-width: 400px) {
    width: 250px;
    min-width: 250px;
  }
`