import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SubjectCard from '../Components/SubjectCard';


export function RenderSubjects(){
  const subarray=[]
  for(let i=0;i<5;i++){
    subarray.push(
    <SwiperSlide>
      <SubjectCard/>
    </SwiperSlide>
    )
  }
 return subarray
 }