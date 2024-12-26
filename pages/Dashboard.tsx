import EmployeeTable from "../components/EmployeeTable";
import CreateEmployeeButton from "../components/CreateEmployeeButton";

function Dashboard() {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center mx-auto max-w-lg text-center">
          <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
              Staff Directory
            </span>
          </h1>
          <div className="w-full flex justify-center mb-4">
            <CreateEmployeeButton />
          </div>
        </div>
        <div className="flex justify-center items-center overflow-x-auto mx-auto">
          <EmployeeTable />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
