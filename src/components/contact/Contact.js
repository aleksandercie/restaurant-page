import React from 'react';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';
import {Motion, TitleSocial, Wrapper, Box, Title, Info, Link, Image, IconAddress, IconPhone, IconEmail, IconClock, IconFacebook, IconInstagram, IconTwitter, IconYoutube} from './Contact.elements'; 
import image from '../../image/tiramisu.jpg';
import image2 from '../../image/team.jpg';
import Fade from 'react-reveal/Fade';

const pageVariants = {
  initial: {
      opacity: 0,
      y: "-100vh",
      scale: 0.8
    },
  in:{
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: "100vh",
    scale: 1.2
  }
};
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

function Contact() {
    return (
        <Motion         
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}>
       
               <Banner image={image} name="Contact"/>
               <Fade bottom cascade>
               <TitleSocial>Check us on social media</TitleSocial>
               <Wrapper>
                    
                    <Link><IconFacebook/></Link>
                    <Link><IconInstagram/></Link>
                    <Link><IconTwitter/></Link>
                    <Link><IconYoutube/></Link>
               </Wrapper>
               <Wrapper>
                   <Image src={image2}/>
               </Wrapper>
               <Wrapper>
               <Box>
                    <Title><IconAddress/>Contact us</Title>
                    <Info>8th floor, 379 Hudson St, New York, NY 10018</Info>
                </Box>
                <Box>
                <Title><IconPhone/>Call us</Title>
                    <Info>(+1) 96 716 6879</Info>
                </Box>
                <Box>
                    <Title><IconEmail/>Mail us</Title>
                    <Info>contact@site.com</Info>
                </Box>
                <Box>
                    <Title><IconClock/>Opening times</Title>
                    <Info>01:00 PM – 11:00 PM</Info>
                    <Info>Every Day</Info>
                </Box>
               </Wrapper>
               </Fade>
              <Footer/>

        </Motion>
    )
}

export default Contact
