import styled from 'styled-components';
import {Facebook} from '@styled-icons/entypo-social/Facebook';
import {Instagram} from '@styled-icons/boxicons-logos/Instagram';
import {Youtube} from '@styled-icons/boxicons-logos/Youtube';
import {Twitter} from '@styled-icons/boxicons-logos/Twitter';
import {Phone} from '@styled-icons/boxicons-regular/Phone';
import {EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {Address} from '@styled-icons/entypo/Address';

export const Wrapper = styled.div`
height: 24vh;
display: flex;
justify-content: center;
flex-wrap: wrap;
padding: 10px 0;
background-color: #222222;
color: #fff;
@media(max-width: 1200px){
    height: 34vh;
}
@media(max-width: 720px){
    height: 48vh;
}

`
export const Box = styled.div`
width: 30%;
justify-content: flex-start;
padding: 0 10px;
@media(max-width: 1200px){
    width: 45%;
    justify-content: center;
}
@media(max-width: 720px){
    width: 90%;
}
`
export const Title = styled.h3`
font-size: 2rem;
font-weight: 400;
text-transform: uppercase;
@media(max-width: 1200px){
    text-align: center;
}
`
export const Info = styled.p`
font-size: 1.4rem;
color: #929092;
@media(max-width: 1200px){
    text-align: center;
}
`
export const SocialBox = styled.div`
display: flex;
padding: 20px 0;
@media(max-width: 1200px){
    justify-content: center;
    margin: 40px auto;
}
`
export const Link = styled.a`
width: 30px;
margin: 0 15px;
transition: all 0.5s ease;
&:hover{
        color: #e64215;
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
export const IconFacebook = styled(Facebook)`

`
export const IconInstagram = styled(Instagram)`

`
export const IconTwitter = styled(Twitter)`

`
export const IconYoutube = styled(Youtube)`

`