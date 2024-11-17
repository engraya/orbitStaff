type EmployeeStatus = "Active" | "Inactive" | "On Leave";

export interface EmployeeType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  renumeration: number;
  age: number;
  country: string;
  status: EmployeeStatus;
  position: string;
  department: string;
  dateOfJoining: string;
  phoneNumber: string;
}
