
"use client"
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { RenderStudents } from '../utils/renderStudents';
import SessionCard from '../Components/SessionCard';
import Calendar from '../Components/Calendar';
import profilePic from "../../../public/profilepic.jpg"
import Image from 'next/image';


const page = () => {
  return (
   <>
     <div className='m-6 '>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
           <Image
              width={100}
              height={40}
              src={profilePic}
             alt="Profile Pic" />
          </figure>
          <div className="card-body">
           <h2 className="card-title">Teacher Name</h2>
            <p>Description Here!</p>
           <div className="card-actions justify-end">
             <Link href="#" className="btn btn-primary">Update Profile</Link>
            </div>
         </div>
        </div>

    <div className='my-3 overflow-y-scroll h-75 w-300'>
     <ul className="list bg-base-200 rounded-box shadow-md">
  
      <li key={"head"} className="p-4 pb-2 text-xs opacity-60 tracking-wide">Course Students:</li>
      {RenderStudents()}
   
  
     </ul>
    </div>

    <div className='bg-base-200 h-150 overflow-y-scroll my-3 p-4 w-300'>
    <p  className=" pb-2 text-xs opacity-60 tracking-wide">Schedule:</p>
      <Calendar/>
    </div>
   </div>
   </>
  )
}

export default page