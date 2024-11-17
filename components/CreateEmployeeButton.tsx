import { Link } from 'react-router-dom'
function CreateEmployeeButton() {
  return (
    <Link to="/create">
    <button  className="relative inline-flex items-center justify-center mx-auto py-2 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gradient-to-r from-green-400 to-blue-500 text-white group">
    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
    </span>
    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
    </span>
    Create
    </button>
    </Link>

  )
}

export default CreateEmployeeButton
