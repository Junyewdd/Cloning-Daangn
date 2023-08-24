import React, { useState } from 'react'
import { styled } from 'styled-components'
import NavMenu from './homeComponents/NavMenu'

const Nav = () => {
  const [click, setClick] = useState("home");
  return (
    <Wrapper>
        <NavMenu which={"home"} click={click} setClick={setClick}/>
        <NavMenu which={"village"} click={click} setClick={setClick}/>
        <NavMenu which={"gps"} click={click} setClick={setClick}/>
        <NavMenu which={"chat"} click={click} setClick={setClick}/>
        <NavMenu which={"me"} click={click} setClick={setClick}/>        
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