import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { employeeList } from "../../data/employees";
import { EmployeeType } from "../../types/employeeType";

interface EmployeeState {
  employees: EmployeeType[];
}

const initialState: EmployeeState = {
  employees: employeeList,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    fetchEmployees: (state, action: PayloadAction<EmployeeType[]>) => {
      state.employees = action.payload;
    },
    addEmployee: (state, action: PayloadAction<Omit<EmployeeType, "id">>) => {
      const newId = state.employees.length > 0
        ? Math.max(...state.employees.map((emp) => emp.id)) + 1
        : 1;
      state.employees.push({ id: newId, ...action.payload });
    },
    updateEmployee: (state, action: PayloadAction<EmployeeType>) => {
      const index = state.employees.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.employees[index] = { ...state.employees[index], ...action.payload };
      }
    },
    deleteEmployee: (state, action: PayloadAction<number>) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
    },
  },
});

export const { fetchEmployees, addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
