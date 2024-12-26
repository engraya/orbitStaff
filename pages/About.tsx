import React from "react"
function About() {
  return (
    <main className='min-h-screen'>
     <section className="px-4 py-2 mx-auto max-w-7xl mt-10">
    <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
      <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">
        <span className="block w-full text-transparent text-center bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
        About OrbitStaff
        </span>
      </h1>
    </div>
  </section>
  <blockquote className="flex flex-col items-center p-4">
  <p className="max-w-4xl text-md font-normal text-slate-200 text-center md:text-lg lg:text-xl">OrbitStaff is a modern staff management solution designed to simplify how businesses manage workforce data. With an intuitive interface and robust features, it allows you to seamlessly add, update, and track staff records. Built for efficiency, OrbitStaff ensures secure and organized data handling while offering analytics to help make informed decisions. Whether you're a small startup or a growing enterprise, OrbitStaff adapts to your needs, empowering teams and streamlining operations. Manage your workforce smarter, faster, and with confidence.
  </p>
</blockquote>

    </main>
  )
}

export default About
