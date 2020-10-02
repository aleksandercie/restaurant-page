import React, { Component } from "react";
import Slider from "react-slick";
import Footer from '../footer/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Motion, Slide, Image, Content, Header, MainHeader} from './Swiper.elements';
import './slickList.css'
import image1 from '../../image/bar.jpg';
import image2 from '../../image/kitchen.jpg';
import image3 from '../../image/restaurant.jpg';

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

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
    };
    return (
      <Motion      
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}>
       
        <Slider {...settings} >
          
            <Slide>
              <Image src={image1} alt="bar"/>
              <Content>
                <Header>Welcome to </Header>
                <MainHeader>Mirrors Place</MainHeader>
              </Content>
            </Slide>
            <Slide>
              <Image src={image2} alt="kitchen"/>
              <Content>
                <Header>Welcome to </Header>
                <MainHeader>Mirrors Place</MainHeader>
              </Content>
            </Slide>
            <Slide>
              <Image src={image3} alt="architecture"/>
              <Content>
                <Header>Welcome to </Header>
                <MainHeader>Mirrors Place</MainHeader>
              </Content>
            </Slide>
        </Slider>
        <Footer/>
      </Motion>

    );
  }
}