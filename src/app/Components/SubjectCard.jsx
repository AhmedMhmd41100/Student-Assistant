import React from 'react'
import subject from "../../../public/subject.jpg"
import Image from 'next/image'

const SubjectCard = () => {
  return (
    <div className="card bg-base-100 image-full w-60 shadow-sm">
  <figure>
    <Image
      src={subject}
      alt="Subject" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Subject Name</h2>
    <p>Teacher: Name</p>
    <p>Level: Level</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View</button>
    </div>
  </div>
</div>
  )
}

export default SubjectCard