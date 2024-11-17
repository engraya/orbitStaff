import React from "react";
import EmployeeTable from "../components/EmployeeTable";
import CreateEmployeeButton from "../components/CreateEmployeeButton";

function Dashboard() {
  return (
    <>
      <div className="relative px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-4 text-xl font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">
              <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                Employee Directory
              </span>
            </h1>
          </div>
          <div className="flex justify-end mb-4">
            <CreateEmployeeButton />
          </div>
        </div>
        <EmployeeTable />
      </div>
    </>
  );
}

export default Dashboard;
