import React from 'react';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';
import {Motion, AboutBox, AboutBoxDesktop, AboutBoxMobile, Content, MainTitle, Title, Info, ImageBox, Image} from './About.elements';
import image from '../../image/dish-about.jpg';
import image2 from '../../image/chefs.jpg';
import image3 from '../../image/cafe.jpg';
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

function About() {
    return (
        <Motion 
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}>  
       
          <Banner image={image3} name="About us"/>
          <Fade bottom cascade>
            <AboutBox>
                <Content>
                    <MainTitle>Italian Restaurant</MainTitle>
                    <Title>Welcome</Title>
                    <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis aliquam molestie. Sed vestibulum vestibulum libero ac fringilla. Ut ultrices ipsum nec feugiat elementum. Praesent euismod eu lorem non vestibulum. Curabitur sed pharetra mi. Nulla volutpat sem quis nisi lobortis, vel scelerisque nisi semper. Quisque luctus ex nulla. Vivamus sodales ante pellentesque, tristique leo porta, feugiat lacus. </Info>
                </Content>
                <ImageBox>
                    <Image src={image}/>
                </ImageBox>
                
            </AboutBox>
            <AboutBox>
              <AboutBoxDesktop>
                <ImageBox>
                    <Image src={image2}/>
                </ImageBox>
                <Content>
                    <MainTitle>Meet Our</MainTitle>
                    <Title>Chef</Title>
                    <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis aliquam molestie. Sed vestibulum vestibulum libero ac fringilla. Ut ultrices ipsum nec feugiat elementum. Praesent euismod eu lorem non vestibulum. Curabitur sed pharetra mi. Nulla volutpat sem quis nisi lobortis, vel scelerisque nisi semper. Quisque luctus ex nulla. Vivamus sodales ante pellentesque, tristique leo porta, feugiat lacus. </Info>
                </Content>
                </AboutBoxDesktop>
                <AboutBoxMobile>
                <Content>
                    <MainTitle>Meet Our</MainTitle>
                    <Title>Chef</Title>
                    <Info>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis aliquam molestie. Sed vestibulum vestibulum libero ac fringilla. Ut ultrices ipsum nec feugiat elementum. Praesent euismod eu lorem non vestibulum. Curabitur sed pharetra mi. Nulla volutpat sem quis nisi lobortis, vel scelerisque nisi semper. Quisque luctus ex nulla. Vivamus sodales ante pellentesque, tristique leo porta, feugiat lacus. </Info>
                </Content>
                <ImageBox>
                    <Image src={image2}/>
                </ImageBox>
                </AboutBoxMobile>
            </AboutBox>
            </Fade>
            <Footer/>
        </Motion >
    )
}

export default About
