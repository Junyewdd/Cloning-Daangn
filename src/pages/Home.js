import React, { useState } from 'react'
import Nav from '../components/home/Nav'
import HomeBody from '../components/home/HomeBody'
import { styled } from 'styled-components'

const Home = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <Container>
    <Wrapper>
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
