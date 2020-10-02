import React from 'react';
import {BannerBox, Image, Mask, Title} from './Banner.elements';
import Fade from 'react-reveal/Fade';

function Banner({image, name}) {
    return (
        <>
        <Fade cascade>
            <BannerBox>
                <Image src={image} alt={name}/>
                <Mask><Title>{name}</Title></Mask>
            </BannerBox>
        </Fade>
        </>
    )
}

export default Banner
