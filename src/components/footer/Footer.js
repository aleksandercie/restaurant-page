import React from 'react';
import {Wrapper, Box, Title, Info, SocialBox, Link, IconAddress, IconPhone, IconEmail, IconFacebook, IconInstagram, IconTwitter, IconYoutube} from './Footer.elements';



function Footer() {
    return (
        <Wrapper>
            <Box>
                <Title>Contact us</Title>
                <Info><IconAddress/>8th floor, 379 Hudson St, New York, NY 10018</Info>
                <Info><IconPhone/>(+1) 96 716 6879</Info>
                <Info><IconEmail/>contact@site.com</Info>
            </Box>
            <Box>
                <Title>Opening times</Title>
                <Info>01:00 PM – 11:00 PM</Info>
                <Info>Every Day</Info>
            </Box>
            <Box>
                <SocialBox>
                    <Link><IconFacebook/></Link>
                    <Link><IconInstagram/></Link>
                    <Link><IconTwitter/></Link>
                    <Link><IconYoutube/></Link>
                </SocialBox>
            </Box>
        </Wrapper>
    )
}

export default Footer
