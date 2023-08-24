import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import ItemDataSection from './item/ItemDataSection'
import { homePageApi } from '../../apis/home';
import { detailPageApi } from '../../apis/detail';

const HomeBody = ({where}) => {
  const [datas, setDatas] = useState([]);
  const getitemDatas = async ()=> {
    const response = await homePageApi();
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
      <ItemDataSection itemDatas={datas} where={where}/>
    </Wrapper>
  )
}

export default HomeBody
const Wrapper = styled.div`
width: 99%;
height: 86%;

display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;

flex-wrap: wrap;
overflow-x: scroll;
`