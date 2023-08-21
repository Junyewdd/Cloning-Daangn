import React from 'react'
import { styled } from 'styled-components'
import Where from './homeComponents/Where'
import Menu from './homeComponents/Menu'

const HomeHeader = () => {
  return (
    <Wrapper>
        <Where>Home</Where>
        <Menu>Menu</Menu>


    </Wrapper>
  )
}

export default HomeHeader

const Wrapper = styled.div`
width: 100%;
height: 7%;
background-color: pink;

display: flex;
justify-content: space-between;
align-items: center;
`