import React from 'react'
import { styled } from 'styled-components';
import UserInfo from './detailComponents/UserInfo';

const DetailContents = ({data}) => {
  return (
    <Wrapper>
        <UserInfo data={data}/>

    </Wrapper>
  )
}

export default DetailContents;

const Wrapper = styled.div`
width: 100%;
height: 48%;
// background-color: green;

display: flex;
flex-direction: row;
`