import React from 'react'
import UpdateEmployeeForm from "../components/UpdateEmployeeForm"
function Update() {
  return (
    <div className="relative mx-auto max-w-7xl">
          <div className="w-full flex justify-center items-center mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-2 text-2xl flex justify-center items-center font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                Update Employee
              </span>
            </h1>
          </div>
    <UpdateEmployeeForm/>
  </div>
  )
}

export default Update
