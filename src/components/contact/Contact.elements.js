import styled from 'styled-components';
import {Phone} from '@styled-icons/boxicons-regular/Phone';
import {Address} from '@styled-icons/entypo/Address';
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {Facebook} from '@styled-icons/entypo-social/Facebook';
import {Instagram} from '@styled-icons/boxicons-logos/Instagram';
import {Youtube} from '@styled-icons/boxicons-logos/Youtube';
import {Twitter} from '@styled-icons/boxicons-logos/Twitter';
import {ClockFill} from '@styled-icons/bootstrap/ClockFill';
import { motion } from 'framer-motion';

export const Motion = styled(motion.div)`
background: #fff;
overflow-x: hidden;
`

export const TitleSocial = styled.h3`
font-size: 2rem;
font-weight: 500;
text-transform: uppercase;
text-align: center;
margin: 50px auto;
padding: 0 25px;
`

export const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 80%;
margin: 40px auto;
color: #222;
@media (max-width: 992px) {
    width: 90%;
  }
`
export const Box = styled.div`
width: 50%;
margin: 30px auto;
@media (max-width: 700px) {
    width: 90%;
  }
`
export const Title = styled.h3`
font-size: 2rem;
font-weight: 400;
text-transform: uppercase;
text-align: center;
display: flex;
justify-content: center;
align-items: center;

`
export const Info = styled.p`
font-size: 1.4rem;
color: #929092;
text-align: center;
`
export const Image = styled.img`
width: 80%;
border-radius: 15px;
@media (max-width: 992px) {
    width: 100%;
    max-width: 100%;
    max-height: 300px;
  }
`
export const IconPhone= styled(Phone)`
width: 24px;
margin: 0 10px 0 0;
`
export const IconEmail = styled(EmailOutline)`
width: 24px;
margin: 0 10px 0 0;
`
export const IconAddress = styled(Address)`
width: 24px;
margin: 0 10px 0 0;
`

export const IconClock = styled(ClockFill)`
width: 24px;
margin: 0 10px 0 0;
`
export const Link = styled.a`
width: 40px;
margin: 0 40px;
transition: all 0.5s ease;
&:hover{
        color: #e64215;
    }
    @media (max-width: 992px) {
        margin: 0 20px;
  }
  @media (max-width: 400px) {
    width: 30px;
    margin: 0 15px;
  }
`
export const IconFacebook = styled(Facebook)`

`
export const IconInstagram = styled(Instagram)`

`
export const IconTwitter = styled(Twitter)`

`
export const IconYoutube = styled(Youtube)`

`