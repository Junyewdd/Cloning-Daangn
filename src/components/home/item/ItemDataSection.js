import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { homePageApi } from '../../../apis/home';

const ItemDataSection = ({itemDatas, where}) => {
  const isCorrectLocation = (item) => {
    if(where === "All") return true;
    return item.location === where;
  }
  return (
    <>
    {itemDatas && 
    itemDatas.map((item)=>(
      isCorrectLocation(item) &&
      <ItemCard item={item}/>
    ))
    }
    </>
  )
}

export default ItemDataSection