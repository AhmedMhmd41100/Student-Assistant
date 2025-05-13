import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
     <>
    <div className='m-6'>
      <div className="bg-base-200  w-300 rounded-xs p-3 my-6 flex justify-between items-center " > 
          <Link href="/courses" className='btn btn-primary'>Add Material</Link>
          <Link href="/courses" className='btn btn-primary'>Remove Material</Link>
          <Link href="/courses" className='btn btn-primary'>Modify Material</Link>
      </div>
        <div >
        <ul className="list bg-base-200 rounded-box shadow-md">
  
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Material List:</li>
          
          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
            
            <div className="list-col-grow">
              <div>Material Name</div>
              <div className="text-xs uppercase font-semibold opacity-60">Date Uploaded:</div>
            </div>
            <button className='btn btn-primary'>Download/View</button>
          </li>
          
          
          
          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
            
            <div className="list-col-grow">
              <div>Material Name</div>
              <div className="text-xs uppercase font-semibold opacity-60">Date Uploaded:</div>
            </div>
            <button className='btn btn-primary'>Download/View</button>
          </li>
          
         
          
          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
            
            <div className="list-col-grow">
              <div>Material Name</div>
              <div className="text-xs uppercase font-semibold opacity-60">Date Uploaded:</div>
            </div>
            <button className='btn btn-primary'>Download/View</button>
          </li>

          
          
          <li className="list-row">
            <div className="text-4xl font-thin opacity-30 tabular-nums">04</div>
            
            <div className="list-col-grow">
              <div>Material Name</div>
              <div className="text-xs uppercase font-semibold opacity-60">Date Uploaded:</div>
            </div>
            <button className='btn btn-primary'>Download/View</button>
          </li>
          
        </ul>
      </div>
    </div>
    </>
  )
}

export default page