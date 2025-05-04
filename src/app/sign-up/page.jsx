"use client"
import React, { useState } from 'react'

const page = () => {
  
  const [signupType,setSignupType]=useState("student")
  return (
    <>
    <div className=" w-screen font-sans text-gray-900">
  <div className=" ">
    <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20">
        <h1 className="mb-6 text-5xl font-black leading-4 ">Sign up</h1>
        <div className="text-lg sm:text-xl">
          <div className="">
            <p className="mb-4">Let's do this! Start by filling in our simple form below.</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-[50%] m-0 ml-50  ">
            <button
              onClick={()=>{setSignupType("student")}}
              className="btn btn-primary  rounded-md w-full rounded-r-none  py-2 px-4 border border-r border-transparent text-center text-sm font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer focus: focus:shadow-none   active:bg-base-300 shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Student
            </button>
            <button
              onClick={()=>{setSignupType("teacher")}}
              className="btn btn-primary rounded-md w-full rounded-l-none  py-2 px-4 border border-l border-transparent text-center text-sm font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer focus: focus:shadow-none  active:bg-base-300 shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Teacher
            </button>
        </div>
      </div>
    </div>
   
  </div>
  {/*Student Form*/}
  {signupType==="student"&&
  <div className=" md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
    <form className="bg-white shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8">
  
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="firstName">First Name</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="firstName" type="text" placeholder="Enter Your First Name" required="" /><span className="my-2 block"></span></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="lastName">Last Name</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="lastName" type="text" placeholder="Enter Your Last Name" required="" /><span className="my-2 block"></span></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="birthdate">Birthdate</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="birthdate" type="date" required="" /><span className="my-2 block"></span></div>
      
      <div className='mb-4'>
      <label className="mb-2 block text-sm font-bold" htmlFor="gender">Choose Your Gender</label>
      <input  id="male" name='gender' type="radio" value="male" required="" /><span className="my-2 "></span>
      <label className='mr-36' htmlFor="male">Male</label>
      <input  id="female" name='gender' type="radio" value="female" required="" /><span className="my-2 "></span>
      <label htmlFor="female">Female</label>
      </div>

      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="email">E-mail</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="email" type="email" placeholder="Enter your Email" required="" /><span className="my-2 block"></span></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="phone">Phone</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="phone" type="phone" placeholder="Enter your Phone number" required="" /><span className="my-2 block"></span></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="password">Password</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="password" type="password" placeholder="******************" required="" /></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="password">Confirm your Password</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="confirm_password" type="password" placeholder="******************" required="" /></div>
      <div className="mb-4">

      <label className="mb-2 block text-sm font-bold" htmlFor="grade">Choose Your Grade</label
      ><select className="shadow-sm mb-3 cursor-pointer w-full appearance-none rounded border border-gray-300 py-2 px-3  leading-tight outline-none ring-blue-500 focus:ring" id="grade" required="">
        <option value="" className="">--Choose a Grade--</option>
        <option value="first" className="">First Grade</option>
        <option value="second" className="">Second Grade</option>
        <option value="third" className="">Third Grade</option>
      </select>
      </div>
      <div className="mb-6">
        <label className="mb-2 flex text-sm"
          ><input type="checkbox" name="accept" className="mr-2" required="" />
          <div className="text-gray-800">
            <p className="">
              I accept the
              <a href="#" className="cursor-pointer text-blue-500 underline"> terms of use </a>
              and
              <a href="#" className="cursor-pointer text-blue-500 underline"> privacy policy.</a>
            </p>
          </div></label
        >
      </div>
      <div className="flex items-center">
        <div className="flex-1"></div>
        <button className=" btn rounded  py-2 px-8 text-center text-lg font-semibold hover: cursor-pointer" type="submit">Create account</button>
      </div>
    </form>
  </div>}
   {/*Teacher Form*/}
   {signupType==="teacher"&&
  <div className=" md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
    <form className="bg-white shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8">
     
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="firstName">First Name</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="firstName" type="text" placeholder="Enter Your First Name" required="" /><span className="my-2 block"></span></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="lastName">Last Name</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="lastName" type="text" placeholder="Enter Your Last Name" required="" /><span className="my-2 block"></span></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="birthdate">Birthdate</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="birthdate" type="date" required="" /><span className="my-2 block"></span></div>
      <div className='mb-4'>
      <label className="mb-2 block text-sm font-bold" htmlFor="gender">Choose Your Gender</label>
      <input  id="male" name='gender' type="radio" value="male" required="" />
      <label className='mr-36' htmlFor="male">Male</label><span className="my-2 "></span>
      <input  id="female" name='gender' type="radio" value="female" required="" />
      <label htmlFor="female">Female</label><span className="my-2 "></span>
      </div>
      
      <label className="mb-2 block text-sm font-bold" htmlFor="gender">Choose Your Degree</label>
        <select className="shadow-sm mb-3 cursor-pointer w-full appearance-none rounded border border-gray-300 py-2 px-3  leading-tight outline-none ring-blue-500 focus:ring" id="degree" required="">
        <option value="" className="">--Choose a Degree</option>
          <option value="none" className="">None</option>
          <option value="bachelor" className="">Bachelor Degree</option>
          <option value="master" className="">Master's Degree</option>
          <option value="phd" className="">Phd Degree</option>
        </select>
      
      
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="firstName">Teaching Faculty</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="school" type="text" placeholder="Enter Your School Name" required="" /><span className="my-2 block"></span></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="email">E-mail</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="email" type="email" placeholder="Enter your Email" required="" /><span className="my-2 block"></span></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="phone">Phone</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="phone" type="phone" placeholder="Enter your Phone number" required="" /><span className="my-2 block"></span></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="password">Password</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="password" type="password" placeholder="******************" required="" /></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="password">Confirm your Password</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="confirm_password" type="password" placeholder="******************" required="" /></div>
      <div className="mb-4">
      <label className="mb-2 block text-sm font-bold" htmlFor="subject">Choose Your Subject{" (Ctrl + Left click htmlFor multiple choices)"}</label>
        <select multiple className="shadow-sm mb-3 cursor-pointer w-full appearance-none rounded border border-gray-300 py-2 px-3  leading-tight outline-none ring-blue-500 focus:ring" id="grade" required="">
          <option value="" className="">--Choose a Subject--</option>
          <option value="arabic" className="">Arabic</option>
          <option value="english" className="">English</option>
          <option value="french" className="">French</option>
          <option value="german" className="">German</option>
          <option value="math" className="">Math</option>
          <option value="physics" className="">Physics</option>
          <option value="chemistry" className="">Chemistry</option>
          <option value="biology" className="">Biology</option>
          <option value="philosophy" className="">Philosophy</option>
          <option value="history" className="">History</option>
          <option value="geography" className="">Geography</option>
          <option value="statistics" className="">Statistics</option>
        </select>  
        <label className="mb-2 block text-sm font-bold" htmlFor="grade">Choose Your Grade{" (Ctrl + Left click for multiple choices)"}</label>
        <select multiple className="shadow-sm mb-3 cursor-pointer w-full appearance-none rounded border border-gray-300 py-2 px-3  leading-tight outline-none ring-blue-500 focus:ring" id="grade" required="">
          <option value="" className="">--Choose a Grade--</option>
          <option value="first" className="">First Grade</option>
          <option value="second" className="">Second Grade</option>
          <option value="third" className="">Third Grade</option>
        </select>
        
        
      </div>
      <div className="mb-6">
        <label className="mb-2 flex text-sm"
          ><input type="checkbox" name="accept" className="mr-2" required="" />
          <div className="text-gray-800">
            <p className="">
              I accept the
              <a href="#" className="cursor-pointer text-blue-500 underline"> terms of use </a>
              and
              <a href="#" className="cursor-pointer text-blue-500 underline"> privacy policy.</a>
            </p>
          </div></label
        >
      </div>
      <div className="flex items-center">
        <div className="flex-1"></div>
        <button className="btn  rounded  py-2 px-8 text-center text-lg font-semibold hover: cursor-pointer" type="submit">Create account</button>
      </div>
    </form>
  </div>}
</div>

    </>
  )
}

export default page