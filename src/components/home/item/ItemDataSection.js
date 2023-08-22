import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { homePageApi } from '../../../apis/home';

const ItemDataSection = ({itemDatas}) => {
  return (
    <>
    {itemDatas && 
    itemDatas.map((item)=>(
      <ItemCard item={item}/>
    ))
    }
    </>
  )
}

export default ItemDataSection