import React, { Component } from 'react';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';
import {Motion, Wrapper, Title, ProductBox, ImageBox, Image, ContentBox, Name, Info, Price, CartBox, IconCart, ButtonBox, Button} from './Menu.elements';
import image from '../../image/chef.jpg';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
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



class Menu extends Component{

  handleClick = (id)=>{
    this.props.addToCart(id);
    let icons = document.querySelectorAll('.iconCart');
    icons[id-1].style.opacity = '1';
      setTimeout(() => icons[id-1].style.opacity = '0', 800)
    }

  render(){

      let itemListMain = this.props.items.map(item=>{
        if(item.type ==='main'){
          return(
            <Fade bottom key={item.id}>
              <ProductBox>
              <ImageBox>
                  <Image src={item.image} />
              </ImageBox>
              <ContentBox>
                  <Name>{item.name}</Name>
                  <Info>{item.description}</Info>
                  <Price>${item.price}</Price>
              </ContentBox>
              <CartBox className="iconCart">
                <IconCart />
              </CartBox>
              <ButtonBox>
                  <Button onClick={()=>{this.handleClick(item.id)}}>order</Button>
              </ButtonBox>
            </ProductBox>
          </Fade>
          )
        }else{
          return null
        }

      });
      let itemListStarter = this.props.items.map(item=>{
        if(item.type ==='starter'){
          return(
            <Fade bottom key={item.id}>
              <ProductBox>
              <ImageBox>
                  <Image src={item.image} />
              </ImageBox>
              <ContentBox>
                  <Name>{item.name}</Name>
                  <Info>{item.description}</Info>
                  <Price>${item.price}</Price>
              </ContentBox>
              <CartBox className="iconCart">
                <IconCart />
              </CartBox>
              <ButtonBox>
                  <Button onClick={()=>{this.handleClick(item.id)}}>order</Button>
              </ButtonBox>
            </ProductBox>
          </Fade>
          )
        }else{
          return null
        }

      });
      let itemListDessert = this.props.items.map(item=>{
        if(item.type ==='dessert'){
          return(
            <Fade bottom key={item.id}>
              <ProductBox>
              <ImageBox>
                  <Image src={item.image} />
              </ImageBox>
              <ContentBox>
                  <Name>{item.name}</Name>
                  <Info>{item.description}</Info>
                  <Price>${item.price}</Price>
              </ContentBox>
              <CartBox className="iconCart">
                <IconCart />
              </CartBox>
              <ButtonBox>
                  <Button onClick={()=>{this.handleClick(item.id)}}>order</Button>
              </ButtonBox>
            </ProductBox>
          </Fade>
          )
        }else{
          return null
        }

      });
      return(
        <Motion 
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}>
                  <Banner image={image} name="Mirrors Menu"/>
                <Wrapper>
                    <Title>Starters</Title>
                      {itemListStarter}
                </Wrapper>
                <Wrapper>
                    <Title>Main</Title>
                      {itemListMain}
                </Wrapper>
                <Wrapper>
                    <Title>Dessert</Title>
                      {itemListDessert}
                </Wrapper>
                <Footer/>
        </Motion>
      )
  }
}

const mapStateToProps = (state)=>{
  return {
      items: state.items
       }
  }

  const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
