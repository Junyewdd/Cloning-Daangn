import React from 'react'
import { styled } from 'styled-components'

const ItemCard = ({item}) => {
  
  return (
    <Wrapper>
      <ItemImage src="/img/main_bear.png" alt="Item Image"/>
      <Contents>
        <Title>{"안녕"}</Title>
        <Where>{"하이"}</Where>
        <Money>{"1000원"}</Money>
        <Information>
          <Image src="/img/talk.png" alt="talk"></Image>
          <div>{"2"}</div>
          <Image src="/img/emptyHeart.png" alt="heart"></Image>
          <div>{"2"}</div>
        </Information>
      </Contents>
    </Wrapper>
  )
}

export default ItemCard

const Wrapper = styled.div`
width: 100%;
height: 100px;
border-bottom: 1px solid black;
padding: 1% 1% 0 1%;
display: flex;
`
const ItemImage = styled.img`
width: 95px;
margin: 1%;
border-radius: 15%;
`
const Contents = styled.div`
width: 235px;
height: 90%;
margin: 1%;
border: 1px solid black;

display: flex;
flex-direction: column;
`
const Title = styled.div`
  font-family: Pretendard;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`
const Where = styled.div`
font-family: Pretendard;
font-size: 0.8rem;
font-style: normal;
font-weight: 30;
line-height: normal;
margin: 1px 0;
`
const Money = styled.div`
font-family: Pretendard;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`
const Information = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin: 0;
height: 40%;
`
const Image = styled.img`
width: 20px;
`