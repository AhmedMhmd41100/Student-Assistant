import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SessionCard from '../Components/SessionCard';


export function RenderSessions(){
  const subarray=[]
  for(let i=0;i<5;i++){
    subarray.push(
    <SwiperSlide>
      <SessionCard/>
    </SwiperSlide>
    )
  }
 return subarray
 }