import Link from "next/link"


export default function StudentLayout({children,}
  )
   {
  return (
    <div className="flex">
      <div className="mr-2">
    <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* Page content here */}
      <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
        Open drawer
      </label>
    </div>
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
        {/* Sidebar content here */}
        <li><Link href="/student" className="font-semibold text-xl">Home</Link></li>
        <li><Link href="/student/my-courses" className="font-semibold text-xl">My Courses</Link></li>
      </ul>
    </div>
  </div>
  </div>
  <div>{children}</div>
  
  </div>
        )
  }