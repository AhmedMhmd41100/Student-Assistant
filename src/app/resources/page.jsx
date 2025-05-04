import React from 'react'

 const page = () => {
  return (
    <>
    <div className="container mx-auto px-6 py-8">
    <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">Learning Resources</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      
      <div className="card bg-blue-50 shadow-md border border-blue-100">
        <div className="card-body">
          <h2 className="card-title text-blue-700">Mathematics</h2>
          <p>Lessons, solved examples, and exam-style questions.</p>
          <div className="card-actions justify-end">
            <a href="#" className="btn btn-sm text-white bg-blue-700 border-blue-700 btn-hover">
              Start Learning
            </a>
          </div>
        </div>
      </div>

      
      <div className="card bg-indigo-50 shadow-md border border-indigo-100">
        <div className="card-body">
          <h2 className="card-title text-indigo-700">Physics</h2>
          <p>Formulas, visual experiments, and quick summaries.</p>
          <div className="card-actions justify-end">
            <a href="#" className="btn btn-sm text-white bg-indigo-700 border-indigo-700 btn-hover">
              Start Learning
            </a>
          </div>
        </div>
      </div>

      
      <div className="card bg-green-50 shadow-md border border-green-100">
        <div className="card-body">
          <h2 className="card-title text-green-700">Chemistry</h2>
          <p>Interactive notes, reaction charts, and lab simulations.</p>
          <div className="card-actions justify-end">
            <a href="#" className="btn btn-sm text-white bg-green-700 border-green-700 btn-hover">
              Start Learning
            </a>
          </div>
        </div>
      </div>

      
      <div className="card bg-teal-50 shadow-md border border-teal-100">
        <div className="card-body">
          <h2 className="card-title text-teal-700">Biology</h2>
          <p>Diagrams, videos, and concept reviews for all levels.</p>
          <div className="card-actions justify-end">
            <a href="#" className="btn btn-sm text-white bg-teal-700 border-teal-700 btn-hover">
              Start Learning
            </a>
          </div>
        </div>
      </div>

      
      <div className="card bg-slate-50 shadow-md border border-slate-100">
        <div className="card-body">
          <h2 className="card-title text-slate-700">English Language</h2>
          <p>Grammar, vocabulary, comprehension, and writing skills.</p>
          <div className="card-actions justify-end">
            <a href="#" className="btn btn-sm text-white bg-slate-700 border-slate-700 btn-hover">
              Start Learning
            </a>
          </div>
        </div>
      </div>

      
      <div className="card bg-purple-50 shadow-md border border-purple-100">
        <div className="card-body">
          <h2 className="card-title text-purple-700">Arabic Language</h2>
          <p>Grammar rules, literature, and language exercises.</p>
          <div className="card-actions justify-end">
            <a href="#" className="btn btn-sm text-white bg-purple-700 border-purple-700 btn-hover">
              Start Learning
            </a>
          </div>
        </div>
      </div>

      
      <div className="card bg-orange-50 shadow-md border border-orange-100">
        <div className="card-body">
          <h2 className="card-title text-orange-700">History</h2>
          <p>Timelines, key events, and revision summaries.</p>
          <div className="card-actions justify-end">
            <a href="#" className="btn btn-sm text-white bg-orange-700 border-orange-700 btn-hover">
              Start Learning
            </a>
          </div>
        </div>
      </div>

      
      <div className="card bg-yellow-50 shadow-md border border-yellow-100">
        <div className="card-body">
          <h2 className="card-title text-yellow-700">Geography</h2>
          <p>Maps, climate topics, and geographic processes.</p>
          <div className="card-actions justify-end">
            <a href="#" className="btn btn-sm text-white bg-yellow-700 border-yellow-700 btn-hover">
              Start Learning
            </a>
          </div>
        </div>
      </div>

      
      <div className="card bg-cyan-50 shadow-md border border-cyan-100">
        <div className="card-body">
          <h2 className="card-title text-cyan-700">Computer Skills</h2>
          <p>Basic IT skills, programming intro, and Office tools.</p>
          <div className="card-actions justify-end">
            <a href="#" className="btn btn-sm text-white bg-cyan-700 border-cyan-700 btn-hover">
              Start Learning
            </a>
          </div>
        </div>
      </div>

      
      <div className="card bg-white shadow-md border border-gray-200 col-span-full">
        <div className="card-body">
          <h2 className="card-title text-gray-800">📌 Study Tools & Support</h2>
          <ul className="list-disc ml-6 text-gray-600">
            <li><a className="link link-primary" href="#">Study Plan Templates</a></li>
            <li><a className="link link-primary" href="#">Helpful YouTube Channels</a></li>
            <li><a className="link link-primary" href="#">Final Revision Sheets</a></li>
          </ul>
        </div>
      </div>

    </div>
  </div>

    </>
  )
}

export default page
