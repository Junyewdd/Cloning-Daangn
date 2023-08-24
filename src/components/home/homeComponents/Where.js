import React, { useState } from 'react'
import { styled } from 'styled-components';
import arrowDown from '../../../img/arrowDown.png';
import arrowUp from '../../../img/arrowUp.png'

const Where = ({where, setWhere}) => {
  const [on, setOn] = useState(false);
  const isOn = () => {
    if(on)return arrowUp;
    else return arrowDown;
  }
  const isClicked = () => {
    setOn(!on);
  }
  const selectAll = () =>{
    setWhere("All");
  }
  const selectSangdo = () =>{
    setWhere("상도제1동");
  }
  const selectHeukseok = () => {
    setWhere("흑석동");
  }
  const selectNo = () => {
    setWhere("노량진제1동");
  }
  return (
    <Container onClick={isClicked}>
      <WhereContainer>
      {where}
      </WhereContainer>
      <img src={isOn()} alt="arrow"></img>
      {on &&
      <SortBar>
        <Sort onClick={selectAll}>All</Sort>
        <Sort onClick={selectSangdo}>상도제1동</Sort>
        <Sort onClick={selectHeukseok}>흑석동</Sort>
        <Sort onClick={selectNo}>노량진제1동</Sort>

      </SortBar>


      }
    </Container>
  )
}

export default Where

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40%;
height: 100%;
position: relative;
`
const WhereContainer = styled.div`
width: 90%;
text-align: center;
font-family: Pretendard;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const SortBar = styled.div`
width: 100%;
height: 200px;
background-color: white;
position: absolute;
z-index: 1;
top: 103%;
left: 1%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
overflow: hidden;
border-radius: 10%;
box-shadow: gray 1px 1px 1px 1px;
`
const Sort = styled.div`
width: 100%;
height: 50%;
border-bottom: 1px solid #919392;
display: flex;
justify-content: center;
align-items: center;
// padding-right: 25px;
text-align: center;
cursor: pointer;
`