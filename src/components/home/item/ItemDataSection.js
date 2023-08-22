import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { homePageApi } from '../../../apis/home';

const ItemDataSection = ({itemDatas}) => {
  // const [datas, setDatas] = useState([]);
  // const getitemDatas = async ()=> {
  //   // const response = await homePageApi();
  //   // console.log("하이");
  //   const response = "하이";
  //   console.log(response);
  //   setDatas(response);
  //   return response;
  // }
  // useEffect(()=>{
  //   const fetchData = () => {
  //     getitemDatas();
  //   };
  //   fetchData();
  // }, [])
  return (
    <>
    {/* {itemDatas && 
    itemDatas.map((item)=>(
      <ItemCard item={item}/>
    ))
    } */}
    </>
  )
}

export default ItemDataSection