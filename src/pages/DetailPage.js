import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import DetailImage from '../components/detail/DetailImage';
import DetailContents from '../components/detail/DetailContents';
import DetailFooter from '../components/detail/DetailFooter';
import { detailPageApi } from '../apis/detail';

const DetailPage = () => {
  const [detailData, setDetailData] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await detailPageApi();
        setDetailData(response.data.result);
        console.log(response.data.result);
      }catch(error){
        console.error("데이터 불러오기 실패", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Container>
    <Wrapper>
      <DetailImage images={detailData}/>
      <DetailContents data={detailData}/>
      <DetailFooter/>

    </Wrapper>
    </Container>
  )
}

export default DetailPage;

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: grey;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 345px;
height: 721.8px;

border: 1px solid black;
background-color: white;
`
