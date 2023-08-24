import React, { useState } from 'react'
import { styled } from 'styled-components';
import DetailHeader from './DetailHeader';


const DetailImage = ({images}) => {
  const [which, setWhich] = useState(1);
  const whichImage = () => {
    if(which===1)return images.image1;
    else return images.image2;
  }
  const checked = async (num) => {
    await setWhich(num);
  }

  return (
    <Wrapper>
        <DetailHeader/>
        <ImageContainer>
        <Image src={whichImage()} alt="img"/>

        </ImageContainer>

        <Choose>
        <Input type="radio" name="tabmenu" id="tab1" onClick={() => checked(1)} />
        <StyledLabel htmlFor="tab1" />
        <Input type="radio" name="tabmenu" id="tab2" onClick={() => checked(2)} />
        <StyledLabel htmlFor="tab2" />
        </Choose>
    </Wrapper>
  )
}

export default DetailImage;
const Wrapper = styled.div`
width: 100%;
height: 45%;

display: flex;
flex-direction: row;
`
const ImageContainer = styled.div`
// width: 200%;
width: 690px;
`
const Image = styled.img`
width: 100%;
height: 100%;
`
const Choose = styled.div`
position: absolute;
z-index: 1;
bottom: 55%;
left: 50%;
transform: translateX(-50%);
`
const Input = styled.input`
display: none;

`
const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: lightgray;
  border-radius: 50%;
  &:before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s;
  }

  // 체크된 상태일 때 가상요소 표시
  input:checked + &::before {
    opacity: 1;
  }
  margin: 5px;
`;