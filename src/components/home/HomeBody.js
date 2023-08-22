import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import ItemDataSection from './item/ItemDataSection'

const HomeBody = () => {
  const [datas, setDatas] = useState([]);
  const getitemDatas = async ()=> {
    // const response = await homePageApi();
    // console.log("하이");
    const response = "하이";
    console.log(response);
    setDatas(response);
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