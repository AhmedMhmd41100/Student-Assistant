"use client"
import React, { useRef, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y,Mousewheel } from 'swiper/modules';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RenderSubjects } from '../../utils/renderCourses';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SubjectCard from '../../Components/SubjectCard';

const page = () => {
  return (
    <>
     <div className="bg-base-200  w-300 rounded-xs p-3 m-6 ">
      <p className='text-2xl font-semibold p-3 mb-6'>My Courses</p>
      <Swiper
      
      modules={[Navigation, A11y]}
      spaceBetween={30}
      slidesPerView={4}
      navigation={true}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     {RenderSubjects()}
    </Swiper>
    </div>
    
    <div className="bg-base-200  w-300 rounded-xs p-3 m-6 flex justify-between items-center " > 
      <Link href="/courses" className='btn btn-primary'>Add Subject</Link>
      <Link href="/courses" className='btn btn-primary'>Remove Subject</Link>
      <Link href="/courses" className='btn btn-primary'>Update Grade</Link>

    </div>
   
    </>
  )
}

export default page