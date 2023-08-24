import React, { useState } from 'react'
import { styled } from 'styled-components';
import emptyHeart from "../../img/emptyHeart.png"
import fullHeart from "../../img/fullHeart.png"

const DetailFooter = ({data}) => {
  const [heartClicked, setHeartClicked] = useState(false);
  const whichHeart = () => {
    if(heartClicked)return fullHeart;
    else return emptyHeart;
  }
  const changeHeart = () => {
    setHeartClicked(!heartClicked)
  }
  return (
    <Wrapper>
      <Left>
      <Heart onClick={changeHeart}>
        <Image src={whichHeart()} alt="heart"></Image>
      </Heart>
      <PriceInfo>
        <Price>{data.price}원</Price>
        <No>가격 제안 불가</No>
      </PriceInfo>
      </Left>
      <Right>
        <Chatting>채팅하기</Chatting>
      </Right>
    </Wrapper>
  )
}

export default DetailFooter;

const Wrapper = styled.div`
width: 100%;
height: 10%;

display: flex;

justify-content: space-between;
align-items: center;
`
const Left = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: row;
`
const Heart = styled.div`
width: 20%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-right: 5px;
border-right: 1px solid grey;
`
const Image = styled.img`
width: 90%;
padding: 5%;
`
const PriceInfo = styled.div`
display: flex;
flex-direction: column;
margin: 5px 5px 5px 15px;
`
const Price = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 3px;
`
const No = styled.div`
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
color: grey;
`
const Right = styled.div`
width: 25%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Chatting = styled.div`
margin: 5px;
background-color: #e78111;
width: 100%;
height: 70%;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
color: white;
cursor: pointer;
`