import React from 'react'
import { styled } from 'styled-components';
import detailHome from "../../img/detailHome.png"
import arrowLeft from "../../img/arrowLeft.png"
import share from "../../img/share.png"
import dots from "../../img/dots.png"
import { useNavigate } from 'react-router-dom';




const DetailHeader = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  }
  return (
    <Wrapper onClick={back}>
      <Left>
        <Image src={arrowLeft} alt="back"></Image>
        <Image src={detailHome} alt="home"></Image>
      </Left>
      <Right>
        <Image src={share} alt="share"></Image>
        <Image src={dots} alt="dots"></Image>
      </Right>
    </Wrapper>
  )
}

export default DetailHeader;

const Wrapper = styled.div`
// width: 100%;
// height: 15.5%;
width: 345px;
height: 50px;
// background-color: green;

flex-direction: row;
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
z-index: 1;
`
const Left = styled.div`
width: 25%;
height: 100%;
justify-content: flex-start;
`
const Right = styled.div`
width: 25%;
height: 100%;
justify-content: flex-end;
`
const Image = styled.img`
width: 50%;
height: 80%;
margin-top: 3px;
`