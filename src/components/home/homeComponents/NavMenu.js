import React from 'react'
import { styled } from 'styled-components'
import home from "../../../img/home.png"
import village from "../../../img/village.png"
import gps from "../../../img/gps.png"
import chat from "../../../img/chat.png"
import me from "../../../img/me.png"
import homeBlack from "../../../img/homeBlack.png"
import villageBlack from "../../../img/villageBlack.png"
import gpsBlack from "../../../img/gpsBlack.png"
import chatBlack from "../../../img/chatBlack.png"
import meBlack from "../../../img/meBlack.png"

const NavMenu = ({which, click, setClick}) => {
  
  const imageMapping = {
    home: home,
    village: village,
    gps: gps,
    chat: chat,
    me: me,
  }
  const blackImage = {
    home: homeBlack,
    village: villageBlack,
    gps: gpsBlack,
    chat: chatBlack,
    me: meBlack,
  }
  const imageClicked = () => {
    if(click === which)return blackImage[which];
    else return imageMapping[which];
  }
  const clickSet = () => {
    setClick(which);
  }
  return (
    <Wrapper onClick={clickSet}>
      <Image src={imageClicked()} alt="image"/>
    
    </Wrapper>
  )
}

export default NavMenu

const Wrapper = styled.div`
width: 20%;
height: 100%;
border: 1px solid black;
`
const Image = styled.img`
width: 100%;
height: 100%;
`