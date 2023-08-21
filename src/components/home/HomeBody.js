import React from 'react'
import { styled } from 'styled-components'
import ItemCard from './ItemCard'

const HomeBody = () => {
  return (
    <Wrapper>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
    </Wrapper>
  )
}

export default HomeBody
const Wrapper = styled.div`
width: 100%;
height: 86%;
background-color: yellow;

display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: row;

flex-wrap: wrap;
overflow: scroll;
`