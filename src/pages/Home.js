import React from 'react'
import HomeHeader from '../components/home/HomeHeader'
import Nav from '../components/home/Nav'
import HomeBody from '../components/home/HomeBody'
import { styled } from 'styled-components'

const Home = () => {
  return (
    <Container>
    <Wrapper>
      <HomeHeader/>
      <HomeBody/>
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
