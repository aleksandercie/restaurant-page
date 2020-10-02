import React from 'react';
import Banner from '../banner/Banner';
import Footer from '../footer/Footer';
import {Motion, Wrapper, Title, InputContainer, InputBox, Label, Input, MultiSelect, ButtonBox, Button} from './Reservation.elements'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './picker.css';
import image from '../../image/reservation.jpg';
import Fade from 'react-reveal/Fade';



const timeOptions = [
    { value: '01:00 PM', label: '01:00 PM' },
    { value: '02:00 PM', label: '02:00 PM' },
    { value: '03:00 PM', label: '03:00 PM' },
    { value: '04:00 PM', label: '04:00 PM' },
    { value: '05:00 PM', label: '05:00 PM' },
    { value: '06:00 PM', label: '06:00 PM' },
    { value: '07:00 PM', label: '07:00 PM' },
    { value: '08:00 PM', label: '08:00 PM' },
    { value: '09:00 PM', label: '09:00 PM' }
  ]
  const peopleOptions = [
    { value: '1 person', label: '1 person' },
    { value: '2 person', label: '2 person' },
    { value: '3 person', label: '3 person' },
    { value: '4 person', label: '4 person' },
    { value: '5 person', label: '5 person' },
    { value: '6 person', label: '6 person' }
  ]
  const theme = theme => ({...theme, borderRadius: 7, colors: {...theme.colors, primary25: '#e64215', primary: '#e64215', }, })

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

function Reservation() {

    return (
        <Motion 
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}>
     
            <Banner image={image} name="Reservation"/>
            <Fade bottom>
            <Wrapper 
                  >
                <Title>Book Table</Title>
                <InputContainer>
                <InputBox>
                    <Label>Date</Label>
                    <DayPickerInput/>
                </InputBox>
                <InputBox>
                    <Label>Time</Label>
                    <MultiSelect options={timeOptions} theme={theme} defaultValue={{ label: "Select time", value: 0 }} />
                </InputBox>
                <InputBox>
                    <Label>People</Label>
                    <MultiSelect options={peopleOptions} theme={theme} defaultValue={{ label: "Select table", value: 0 }} />
                </InputBox>
                <InputBox>
                    <Label>Name</Label>
                    <Input placeholder="Name" type="text" onFocus={(e) => e.target.placeholder = "Joe"}/>
                </InputBox>
                <InputBox>
                    <Label>Phone</Label>
                    <Input placeholder="Phone" onFocus={(e) => e.target.placeholder = "96 716 6879"}/>
                </InputBox>
                <InputBox>
                    <Label>Email</Label>
                    <Input placeholder="Email" type="email" onFocus={(e) => e.target.placeholder = "jsmith@example.com"}/>
                </InputBox>
                </InputContainer>
                <ButtonBox>
                    <Button>Book table</Button>
                </ButtonBox>
            </Wrapper>
            </Fade>
            <Footer/>
        </Motion>
    )
}

export default Reservation
