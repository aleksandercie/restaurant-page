import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';
import { Motion, Wrapper, Title, TitleSecondary, List, Item, Image, Name, Number, IconPlus, IconMinus, Link, Price, RemoveButton, IconRemove, TotalBox, Total, TotalButton } from './Cart.elements';
import image from '../../image/reservation.jpg';
import { removeItem,addQuantity,subtractQuantity} from '../../actions/cartActions';
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
    
class Cart extends Component{    
  
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    

    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                      <Fade bottom key={item.id}>
                            <Item >
                                    <Image src={item.image}/>
                                    <Name>{item.name}</Name>
                                    <Number><Link onClick={()=>{this.handleSubtractQuantity(item.id)}}><IconMinus/></Link>{item.quantity}<Link onClick={()=>{this.handleAddQuantity(item.id)}}><IconPlus/></Link></Number>
                                    <Price>$ {item.price}</Price>
                                    <RemoveButton><Link onClick={()=>{this.handleRemove(item.id)}}><IconRemove/></Link></RemoveButton>  

                            </Item>
                      </Fade>                  
                    )
                })
            ):

             (  
              <Fade bottom>
                <TitleSecondary>is empty</TitleSecondary>
              </Fade>
             )

             let addedTotal = this.props.items.length ?
             (  
              <Fade bottom>
              <TotalBox>
                  <Total>
                    Total: {this.props.total.toFixed(2)} $
                  </Total> 
                  <TotalButton>order</TotalButton>                
               </TotalBox>  
               </Fade>                
             ):
              (
                 null
              )
       return(
        <Motion      
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}>
            <Banner image={image} name="Cart"/>
            <Wrapper>
                    <Fade bottom>
                      <Title>Your order</Title>
                    </Fade>    
                    <List>
                    {addedItems}
                    </List>
            </Wrapper>
            {addedTotal}
            <Footer/>
            </Motion>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
  return{
      removeItem: (id)=>{dispatch(removeItem(id))},
      addQuantity: (id)=>{dispatch(addQuantity(id))},
      subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)