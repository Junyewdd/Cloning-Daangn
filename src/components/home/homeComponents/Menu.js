import React from 'react'
import { styled } from 'styled-components'
import menuButton from "../../../img/menuButton.png"
import searchButton from "../../../img/searchButton.png"
import alarm from "../../../img/alarm.png"
const Menu = () => {
  return (
    <Right>
    <Image src={menuButton} alt="menu"/>
    <Image src={searchButton} alt="search"/>
    <Image src={alarm} alt="alarm"/>
    </Right>
  )
}

export default Menu
const Right = styled.div`
width: 33%;
`

const Image = styled.img`
width: 35px;
`