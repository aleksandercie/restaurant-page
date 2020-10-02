import styled from 'styled-components';
import { motion } from 'framer-motion';
import {Plus} from '@styled-icons/boxicons-regular/Plus';
import {Minus} from '@styled-icons/boxicons-regular/Minus';
import {Cross} from '@styled-icons/entypo/Cross';


export const Motion = styled(motion.div)`
background: #fff;
overflow-x: hidden;
`
export const Wrapper = styled.div`
width: 80%;
margin: 40px auto;
color: #222;
@media(max-width: 1100px){
    width: 90%;
}
`
export const Title = styled.h3`
text-align: center;
font-size: 3rem;
`

export const TitleSecondary = styled.h4`
text-align: center;
font-size: 2.6rem;
font-weight: 500;
`
export const List = styled.ul`
padding: 0;
`
export const Item = styled.li`
list-style: none;
display: flex;
align-items: center;
justify-content: space-around;
margin: 40px auto;
font-size: 2.4rem;
@media(max-width: 992px){
    flex-direction: column;
    justify-content: center;
    width: 300px;
}
@media(max-width: 360px){
    width: 250px;
}
`
export const Image = styled.img`
border-radius: 15px;
width: 300px;
@media(max-width: 360px){
    width: 250px;
}
`
export const Name= styled.h5`
width: 20%;
padding: 0 15px;
font-weight: 400;
@media(max-width: 992px){
    text-align: center;
    width: 90%;
}
`
export const Number = styled.div`
width: 120px;
padding: 10px 15px;
border: 1px solid #222;
border-radius: 25px;
font-weight: 400;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Link = styled.a`
width: 25px;
margin: 0;
transition: all 0.5s ease;
&:hover{
        color: #e64215;
    }
`
export const IconPlus = styled(Plus)`

`
export const IconMinus = styled(Minus)`

`
export const Price = styled.h5`
padding: 0 15px;
font-weight: 400;
`

export const RemoveButton = styled.div`
width: 40px;
display: flex;
align-items: center;
`
export const IconRemove = styled(Cross)`

`

export const TotalBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
width: 80%;
margin: 40px auto;
color: #222;
@media(max-width: 1100px){
    width: 90%;
}
@media(max-width: 992px){
    align-items: center;
}
`
export const Total = styled.h5`
font-size: 3rem;
`
export const TotalButton = styled.button`
width: 30%;
min-width: 200px;
border-radius: 7px;
padding: 15px 10px;
font-weight: 600;
font-size: 2.2rem;
text-transform: uppercase;
border: none;
outline: none;
color: #fff;
background-color: #e64215;
transition: all 0.5s ease;
:hover{
    background-color: #34a853;
}
@media(max-width: 992px){
    width: 40%;
}
`