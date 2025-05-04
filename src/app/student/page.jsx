"use client"
import React, { useRef, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y,Mousewheel } from 'swiper/modules';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RenderSubjects } from '../utils/renderCourses';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SubjectCard from '../Components/SubjectCard';
import SessionCard from '../Components/SessionCard';
import Calendar from '../Components/Calendar';


const page = () => {
  
 

 function RenderSessions(){
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

  return (
    <>  
  <div className="grid grid-cols-3 grid-rows-2 gap-6 mt-6 mb-10 ">
    {/*Courses Slider */}
    <div className="bg-base-200 col-span-2 w-200 rounded-xs p-3 ">
      <p className='text-2xl font-semibold p-3 mb-6'>Recently Visited</p>
      <Swiper
      
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation={true}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     {RenderSubjects()}
    </Swiper>
</div>
    {/* Quiz Slider */}
    <div className="bg-base-200 col-start-3 w-100 rounded-xs p-3 flex flex-col ">
    <p className='text-2xl font-semibold p-3 mb-6'>Upcoming Quizzes</p> 
    <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        spaceBetween={10}
        slidesPerView={2}
        mousewheel={true}
        modules={[Pagination,Mousewheel]}
        className='h-70'
      >
        <SwiperSlide>
          
          <div className='bg-secondary  rounded-2xl w-50 p-4 flex flex-col items-center'>
            <p>Class: Name</p>
            <p>Teacher: Name</p>
            <p>Date : Date</p>
            <Link href="#" className='btn'>Start</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          
          <div className='bg-secondary  rounded-2xl w-50 p-4 flex flex-col items-center'>
            <p>Class: Name</p>
            <p>Teacher: Name</p>
            <p>Date : Date</p>
            <Link href="#" className='btn'>Start</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          
          <div className='bg-secondary  rounded-2xl w-50 p-4 flex flex-col items-center'>
            <p>Class: Name</p>
            <p>Teacher: Name</p>
            <p>Date : Date</p>
            <Link href="#" className='btn'>Start</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          
          <div className='bg-secondary  rounded-2xl w-50 p-4 flex flex-col items-center'>
            <p>Class: Name</p>
            <p>Teacher: Name</p>
            <p>Date : Date</p>
            <Link href="#" className='btn'>Start</Link>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
    {/* Session Slider */}
    <div className="bg-base-200 col-span-2 row-start-2 w-200 rounded-xs p-3 ">
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
    {/* Assignment Slider */}
    <div className="bg-base-200 col-start-3 row-start-2 w-100 rounded-xs p-3 flex flex-col">
    <p className='text-2xl font-semibold p-3 mb-6'>Upcoming Sessions</p> 
    <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        spaceBetween={10}
        slidesPerView={2}
        mousewheel={true}
        modules={[Pagination,Mousewheel]}
        className='h-70'
      >
        <SwiperSlide>
          
          <div className='bg-secondary  rounded-2xl w-50 p-4 flex flex-col items-center'>
            <p>Class: Name</p>
            <p>Teacher: Name</p>
            <p>Date : Date</p>
            <Link href="#" className='btn'>Submit</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          
          <div className='bg-secondary  rounded-2xl w-50 p-4 flex flex-col items-center'>
            <p>Class: Name</p>
            <p>Teacher: Name</p>
            <p>Date : Date</p>
            <Link href="#" className='btn'>Start</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          
          <div className='bg-secondary  rounded-2xl w-50 p-4 flex flex-col items-center'>
            <p>Class: Name</p>
            <p>Teacher: Name</p>
            <p>Date : Date</p>
            <Link href="#" className='btn'>Start</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          
          <div className='bg-secondary  rounded-2xl w-50 p-4 flex flex-col items-center'>
            <p>Class: Name</p>
            <p>Teacher: Name</p>
            <p>Date : Date</p>
            <Link href="#" className='btn'>Start</Link>
          </div>
        </SwiperSlide>
        
        
      </Swiper>
    </div>
  </div>

  <div className='bg-base-200 m-6 p-4'>
    <Calendar/>
  </div>
   </>
  )
}

export default page