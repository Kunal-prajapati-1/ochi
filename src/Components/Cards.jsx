/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'

const Cards = () => {
    const data =[
        {bg:'#004D43',width:"50%", src:"src\\Components\\logos\\logo001.svg",button:'©2019-2022'},
        {bg:'#212121',width:"25%", src:'src\\Components\\logos\\logo002.svg',button:'rating 5.0 on clutch'},
        {bg:'#212121',width:"25%", src:'src\\Components\\logos\\logo003.png',button:'business bootcamp alumni'},
    ]
  return (
    <div className='max-h-screen w-full flex sm:flex-col sm:items-center base:flex-row gap-[1vw] bg-[#F1F1F1] px-[4vw] py-[8vw]'>
       {data.map((item,idx) =>(
         <Card key={idx} val={item} idx={idx}/>
       ))}
    </div>
  )
}

export default Cards