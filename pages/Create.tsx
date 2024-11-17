import CreateEmployeeForm from '../components/CreateEmployeeForm'
function Create() {
  return (
    <div className="relative mx-auto max-w-7xl">
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Create New Employee</h2>
      <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
        This is your life and it's ending one minute @ a time...</p>
    </div>
    <CreateEmployeeForm/>
  </div>
  )
}

export default Create
