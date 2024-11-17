
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {countries} from "../data/countries";
import {employeeStatuses} from "../data/status";
import {employeePositions} from "../data/positions";
import {departments} from "../data/departments";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateEmployee } from "../store/reducers/employeeReducer";
import { EmployeeType } from "../types/employeeType";
import { RootState } from "../store";
import { Link } from "react-router-dom";

function UpdateEmployeeForm() {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const employees = useSelector((state: RootState) => state.employee.employees);
  const existingEmployee = employees.find((employee : EmployeeType) => employee.id === Number(id));


  const [formData, setFormData] = useState<EmployeeType>({
    firstName: "",
    lastName: "",
    email: "",
      // @ts-ignore
    renumeration: "",
      // @ts-ignore
    age: "",
    country: "",
      // @ts-ignore
    status: "",
    position: "",
    department: "",
    dateOfJoining: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (existingEmployee) {
      setFormData(existingEmployee); // Prefill the form with existing employee data
    }
  }, [existingEmployee]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        // @ts-ignore
      dispatch(updateEmployee({ id, ...formData }));
      toast.success("Employee updated successfully!");
      navigate("/dashboard"); // Navigate back to the dashboard
    } catch (error) {
      console.error("Error updating employee:", error);
      toast.error("An error occurred while updating the employee. Please try again.");
    }
  };

  if (!existingEmployee) {
    return <p>Employee not found.</p>;
  }


  return (
    <>
    <div className="dark:bg-gray-900">
  <div className="w-full max-w-7xl mx-auto p-2">
    <div className="bg-white text-gray-700 dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-gray-50 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
             />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-gray-50 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            />
          </div>
          <div>
            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
            <input
              type="text"
              id="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full bg-gray-50 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="mt-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-50 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
          <select id="position" className="w-full bg-gray-50 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" value={formData.position} onChange={handleChange}>
          <option value="" disabled>
            Select a position
          </option>
          {employeePositions.map((pos, index) => (
            <option key={index} value={pos}>
              {pos}
            </option>
        ))}
      </select>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
          <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
          <select id="country" className="w-full bg-gray-50 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" value={formData.country} onChange={handleChange}>
          <option value="" disabled>
            Select a country
          </option>
              {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
              ))}
          </select>
          </div>
          <div>
            <label htmlFor="dateOfJoining" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date Joined</label>
            <input
              type="date"
              id="dateOfJoining"
              value={formData.dateOfJoining}
              onChange={handleChange}
              className="w-full bg-gray-50 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4">
        <div className="mt-2">
          <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full bg-gray-50 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="renumeration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Renumeration</label>
          <input
            type="text"
            id="renumeration"
            value={formData.renumeration}
            onChange={handleChange}
            className="w-full bg-gray-50 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
          />
        </div>
        </div>
   
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
            <select id="department" className="w-full bg-gray-50 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" value={formData.department} onChange={handleChange}>
            <option value="" disabled>
            Select a department
          </option>
              {departments.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
              ))}
          </select>
          </div>
          <div>
          <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
          <select id="status" className="w-full bg-gray-50 rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" value={formData.status} onChange={handleChange}>
          <option value="" disabled>
            Select status
          </option>
              {employeeStatuses.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
              ))}
          </select>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-3">
      <Link to="/dashboard">
        <button  className="border border-red-500 text-red-500 font-bold px-4 py-2 rounded-lg">Cancel</button>
      </Link>
        <button type="submit" className="bg-gradient-to-r from-green-400 to-sky-500  text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Update</button>
      </div>
      </form>
    </div>
  </div>
</div>
    </>
  )
}

export default UpdateEmployeeForm
