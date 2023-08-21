import React from 'react'
import { styled } from 'styled-components'
import NavMenu from './homeComponents/NavMenu'

const Nav = () => {
  return (
    <Wrapper>
        <NavMenu/>
        <NavMenu/>
        <NavMenu/>
        <NavMenu/>
        <NavMenu/>        
    </Wrapper>
  )
}

export default Nav

const Wrapper = styled.div`
width: 100%;
height: 7%;
background-color: pink;

display: flex;
flex-direction: row;
`