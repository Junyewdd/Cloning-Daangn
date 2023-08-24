import React, { useState } from 'react'
import Nav from '../components/home/Nav'
import HomeBody from '../components/home/HomeBody'
import { styled } from 'styled-components'
import HomeHeader from "../components/home/HomeHeader"
const Home = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <Container>
    <Wrapper>
      <HomeHeader/>
      <HomeBody/>
      <Writing>글쓰기</Writing>
      <Nav/>
    </Wrapper>
    </Container>

  )
}

export default Home

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: grey;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 345px;
height: 721.8px;

border: 1px solid black;
background-color: white;
`
const Writing = styled.div`
position: absolute;
margin: 5px;
background-color: #e78111;
width: 70px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;

bottom: 10%;
left: 50%;
transform: translateX(+85px);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

border-radius: 20px;
color: white;
cursor: pointer;
`