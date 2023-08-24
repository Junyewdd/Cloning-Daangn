import React from 'react'
import { styled } from 'styled-components';

const Contents = ({data}) => {
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <ItemInfo>{data.category} · {data.uploadTime}</ItemInfo>
      <Content>
      {data.content}
      </Content>
      <ItemInfo>관심{data.wish} · 조회{data.view}</ItemInfo>
      <Accuse>이 게시물 신고하기</Accuse>
    </Wrapper>
  )
}

export default Contents;

const Wrapper = styled.div`
width: 90%;
height: 90%;
margin: 5%;
`
const Title = styled.div`
font-family: Pretendard;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 7px;
  
`
const ItemInfo = styled.div`
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  color: grey;
  margin-bottom: 10px;
`
const Content = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  height: 50%;
`
const Accuse = styled.div`
font-family: Pretendard;
font-size: 13px;
font-style: normal;
font-weight: 100;
line-height: normal;
color: grey;
margin-bottom: 10px;
text-decoration: underline;
text-underline-position:under;
cursor: pointer;
height: 15%;
display: flex;
align-items: center;
`