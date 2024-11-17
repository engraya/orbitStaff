import EmployeeTable from "../components/EmployeeTable"



function Dashboard() {
  return (
<div className="relative px-6 pt-8 lg:px-8">
  <div className="relative mx-auto max-w-7xl">
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">Employee Data</h2>
    </div>
  </div>
  <EmployeeTable/>
</div>

  )
}

export default Dashboard
