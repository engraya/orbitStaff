import CreateEmployeeForm from '../components/CreateEmployeeForm'
function Create() {
  return (
    <div className="relative mx-auto max-w-4xl">
          <div className="w-full flex justify-center items-center mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-2 text-2xl flex justify-center items-center font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                Create New Staff
              </span>
            </h1>
          </div>
    <CreateEmployeeForm/>
  </div>
  )
}

export default Create
