import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import ItemDataSection from './item/ItemDataSection'
import { homePageApi } from '../../apis/home';
import { detailPageApi } from '../../apis/detail';

const HomeBody = () => {
  const [datas, setDatas] = useState([]);
  const getitemDatas = async ()=> {
    const response = await homePageApi();
    console.log("하이");
    // const response = "하이";
    console.log(response.data.result);
    setDatas(response.data.result);
    const detail = await detailPageApi();
    console.log(detail);
    return response;
  }
  useEffect(()=>{
    const fetchData = () => {
      getitemDatas();
    };
    fetchData();
  }, []);
  return (
    <Wrapper>
      <ItemDataSection itemDatas={datas}/>
    </Wrapper>
  )
}

export default HomeBody
const Wrapper = styled.div`
width: 100%;
height: 86%;

display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: row;

flex-wrap: wrap;
overflow: scroll;
`