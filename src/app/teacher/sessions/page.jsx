"use client"
import React, { useRef, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y,Mousewheel } from 'swiper/modules';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RenderSessions } from '../../utils/renderSessions';
import { RenderStudents } from '../../utils/renderStudents';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SessionCard from '../../Components/SessionCard';
import Calendar from '../../Components/Calendar';

const page = () => {
  return (
    <div className='m-6 '>
      <div className="bg-base-200  w-300 rounded-xs p-3 my-6 flex justify-between items-center " > 
      <Link href="/courses" className='btn btn-primary'>Add Session</Link>
      <Link href="/courses" className='btn btn-primary'>Remove Session</Link>
      <Link href="/courses" className='btn btn-primary'>Modify Session</Link>
      </div>
       
   <div className="bg-base-200 col-span-2 row-start-2 w-300 rounded-xs p-3 ">
    <p className='text-2xl font-semibold p-3 mb-6'>Upcoming Sessions</p>
      <Swiper
      
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {RenderSessions()}
    
    </Swiper>
    </div>
      
    </div>
  )
}

export default page