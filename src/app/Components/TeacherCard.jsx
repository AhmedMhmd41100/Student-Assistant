import React from 'react'
import Image from 'next/image'
import profilePic from "../../../public/profilepic.jpg"

const TeacherCard = () => {
  return (
    <div className="w-full max-w-sm bg-secondary border border-gray-200 rounded-lg shadow-sm pt-2 ">
    
    <div className="flex flex-col items-center pb-10">
        <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" src={profilePic} alt="profile image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900">Teacher Name</h5>
        <span className="text-sm text-gray-900 ">Subject Teacher</span>
        <div className="flex mt-4 md:mt-6">
            <a href="#" className="btn inline-flex items-center px-4 py-2 text-sm font-medium text-center  ">Add Teacher</a>
            
        </div>
    </div>
</div>
  )
}

export default TeacherCard