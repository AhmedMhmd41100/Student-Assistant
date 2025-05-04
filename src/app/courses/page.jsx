"use client"
import React, { useState } from 'react'
import image from "../../../public/subject.jpg"
import Image from 'next/image'
import Link from 'next/link'

const page = () => {

  function renderSubjects(grade,semester){
    const subjectList=[]
    for(let i=0;i<6 ;i++){
      subjectList.push((<div key={i} className=" group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-38 w-92 m-2.5 overflow-hidden text-white rounded-md">
          <Image className=" cursor-pointer transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110" 
               src={image} alt="Subject image" />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">
            Subject Name
          </h6>
          <p className="text-slate-600 leading-normal font-light">
            Grade {grade}
          </p>
          <p className="text-slate-600 leading-normal font-light">
            {semester} Semester
          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
         <Link href="/courses/teachers" className="btn btn-primary">Add</Link>
        </div>
      </div> ))
    }
    return subjectList
  }

   const [semester,setSemester]=useState("First")

  return (
    <div className='my-6 '>
      <div className='relative mx-auto max-w-7xl '>
  
        <h1 className='text-4xl font-bold ml-16'>Explore Courses</h1>

        <div className="row flex justify-center items-center w-auto mt-12">
            <button
              onClick={()=>{setSemester("First")}}
              className="rounded-md w-full rounded-r-none bg-secondary py-2 px-4 border border-r border-transparent text-center text-sm font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer focus:bg-primary focus:shadow-none active:bg-primary hover:bg-bg-primary active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              First Semester
            </button>
            <button
              onClick={()=>{setSemester("Second")}}
              className="rounded-md w-full rounded-l-none bg-secondary py-2 px-4 border border-l border-transparent text-center text-sm font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer focus:bg-primary focus:shadow-none active:bg-primary hover:bg-bg-primary active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Second Semester
            </button>
        </div>
  
        <div className='mx-auto max-w-7xl mt-12 pt-1 bg-secondary rounded-2xl '>
          <h2 className='my-6 ml-6 text-3xl font-semibold'>First Grade</h2>
  
          <div className="ml-4 flex row overflow-x-scroll gap-8">
            {renderSubjects(1,semester)}
              
          </div>
  
        </div>

        <div className='mx-auto max-w-7xl mt-12 pt-1 bg-secondary rounded-2xl '>
          <h2 className='my-6 ml-6 text-3xl font-semibold'>Second Grade</h2>
  
          <div className="ml-4 flex row overflow-x-scroll gap-8">
            {renderSubjects(2,semester)}
              
          </div>
  
        </div>

        <div className='mx-auto max-w-7xl my-12 pt-1 bg-secondary rounded-2xl '>
          <h2 className='my-6 ml-6 text-3xl font-semibold'>Third Grade</h2>
  
          <div className="ml-4 flex row overflow-x-scroll gap-8">
            {renderSubjects(3,semester)}
              
          </div>
  
        </div>
  
      </div>
      
    </div>
  )
}

export default page