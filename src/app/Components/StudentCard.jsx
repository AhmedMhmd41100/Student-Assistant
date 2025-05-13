import React from 'react'
import profilePic from "../../../public/profilepic.jpg"
import Image from 'next/image'

const StudentCard = ({id}) => {
  return (
    <li key={id} className="list-row">
    <div><Image className="size-10 rounded-box" src={profilePic}/></div>
    <div>
      <div>Student Name</div>
      <div className="text-xs font-semibold opacity-60">Level: Level</div>
    </div>
    </li>
  )
}

export default StudentCard