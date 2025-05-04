import button from "daisyui/components/button";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div
  className="hero min-h-screen bg-[url(../../public/bg-image.jpg)] mb-4"
  
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Achieve Excellence with <span className='font-bold text-accent'>Ease</span></h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Link href="/sign-up" className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>


<div
  className="hero min-h-screen bg-[url(../../public/study.webp)] mb-4" 
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Study Your Courses on Your own <span className='font-bold text-accent'>Time</span></h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Link href="/courses" className="btn btn-primary">Explore Now</Link>
    </div>
  </div>
</div>

<div
  className="hero min-h-screen bg-[url(../../public/resources.jpg)]"
  
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Gain Access to Study Material from Your Favorite <span className='font-bold text-accent'>Teachers</span></h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Link href="/resources" className="btn btn-primary">Get Access</Link>
    </div>
  </div>
</div>


  </>
    
  );
}
