import TeacherCard from '@/app/Components/TeacherCard'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-base-200 m-6 p-6'>
     <h1 className='font-bold text-3xl mb-6'>Choose Your Teacher:</h1>

     <div className='flex gap-32 flex-wrap'>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
     </div>

    </div>
    </>
  )
}

export default page