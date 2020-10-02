import styled from 'styled-components';

export const BannerBox = styled.div`
width: 100%;
position: relative;

`

export const Image = styled.img`

@media (max-width: 992px) {
  height: 30vh;
  }
`
export const Mask = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
z-index: 2;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.5);
`
export const Title = styled.h2`
font-size: 7rem;
margin: 0 15px;
text-align: center;
text-transform: uppercase;
color: #fff;
@media (max-width: 992px) {
    font-size: 6rem;
  }
  @media (max-width: 500px) {
    font-size: 3.6rem;
  }
`