export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    renumeration: number;
    age: number;
    country: string;
    status: "Active" | "Inactive" | "On Leave";
    position: string;
    department: string;
    dateOfJoining: string;
    phoneNumber: string;
  }
  
  export const employeeList: Employee[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      renumeration: 50000,
      age: 28,
      country: "USA",
      status: "Active",
      position: "Software Engineer",
      department: "IT",
      dateOfJoining: "2021-05-15",
      phoneNumber: "+1-555-1234",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      renumeration: 60000,
      age: 32,
      country: "Canada",
      status: "On Leave",
      position: "Project Manager",
      department: "Operations",
      dateOfJoining: "2019-08-10",
      phoneNumber: "+1-555-5678",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@example.com",
      renumeration: 55000,
      age: 35,
      country: "UK",
      status: "Inactive",
      position: "Business Analyst",
      department: "Finance",
      dateOfJoining: "2020-03-20",
      phoneNumber: "+44-555-9101",
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@example.com",
      renumeration: 48000,
      age: 26,
      country: "Australia",
      status: "Active",
      position: "UX Designer",
      department: "Design",
      dateOfJoining: "2022-01-12",
      phoneNumber: "+61-555-1314",
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Wilson",
      email: "david.wilson@example.com",
      renumeration: 52000,
      age: 30,
      country: "Germany",
      status: "Active",
      position: "DevOps Engineer",
      department: "IT",
      dateOfJoining: "2018-11-05",
      phoneNumber: "+49-555-1516",
    },
  ];
  