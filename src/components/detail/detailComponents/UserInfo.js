import React from 'react'
import { styled } from 'styled-components';
import profile from "../../../img/profile.png"
import manner from "../../../img/manner.png"
const UserInfo = ({data}) => {
  return (
    <Wrapper>
        <Left>
          <Profile src={profile} alt="profile"/>
          <Info>
            <UserId>{data.userId}</UserId>
            <div>{data.location}</div>
          </Info>
        </Left>
        <Right src={manner} alt="manner"/>

    </Wrapper>
  )
}

export default UserInfo;
const Wrapper = styled.div`
width: 100%;
height: 17%;
box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
display: flex;
justify-content: space-between;
align-items: center;
`
const Left = styled.div`
width: 30%;
height: 100%;
display: flex;
`
const Profile = styled.img`
height: 100%;
`
const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const UserId = styled.div`
font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
const Right = styled.img`
width: 30%;
height: 100%;
background-color: black;
`