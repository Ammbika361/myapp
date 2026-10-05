import React, { useMemo, useState } from "react";

import './n.css'

const ie=[
    {
      id:101,
      name:"Rahul Aggrawal",
      email:"rahul@technova.com",
      department:"Development",
      salary:5000,
      status:"Active",
      initials:"RA",
    },
    {
      id:102,
      name:"Priya Singh",
      email:"priya@technova.com",
      department:"HR" ,
       salary:38000,
       status:"Active",
       initials:"PS",

    },
    {
      id: 103,
    name: "Amit Verma",
    email: "amit@technova.com",
    department: "Marketing",
    salary: 35000,
    status: "On Leave",
    initials: "AV",
    },
    {
      id: 104,
    name: "Neha Patel",
    email: "neha@technova.com",
    department: "Development",
    salary: 52000,
    status: "Active",
    initials: "NP",
    },
    {
       id: 105,
    name: "Sameer Khan",
    email: "sameer@technova.com",
    department: "Sales",
    salary: 41000,
    status: "Active",
    initials: "SK",
    },];

export default function News() {
   const [employees, setEmployees] = useState(ie);
    const [search, setSearch] = useState("");
     const [department, setDepartment] = useState("All Departments");

     const departments=["All Departments",...new Set(employees.map((employee)=>employee.department)), ];
     // Search + department filter
  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        employee.name.toLowerCase().includes(searchText) ||
        employee.email.toLowerCase().includes(searchText);

      const matchesDepartment =
        department === "All Departments" ||
        employee.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [employees, search, department]);

  // Count active employees
  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  // Count employees on leave
  const employeesOnLeave = employees.filter(
    (employee) => employee.status === "On Leave"
  ).length;

  // Add employee
  function addEmployee() {
    const name = prompt("Enter employee name:");

    if (!name || !name.trim()) {
      return;
    }

    const newEmployee = {
      id: Math.max(...employees.map((employee) => employee.id), 100) + 1,
      name: name.trim(),
      email:
        name.trim().toLowerCase().replace(/\s+/g, ".") +
        "@technova.com",
      department: "Development",
      salary: 40000,
      status: "Active",
      initials: name
        .trim()
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    };

    setEmployees([...employees, newEmployee]);
  }
  // Delete employee
  function deleteEmployee(id) {
    setEmployees(
      employees.filter((employee) => employee.id !== id)
    );
  }

  // Edit employee
  function editEmployee(employee) {
    alert("Edit employee: " + employee.name);
  }

  return (
     <div className="app">

      {/* HEADER*/ }
      <header className="header">

        <div>
          <h1>Employee Management</h1>
          <p>Manage your organization's employee records</p>
        </div>

        <button className="add-btn" onClick={addEmployee}>
          + Add Employee
        </button>

      </header>

      <main className="container">

        {/* SUMMARY CARDS */}
        <section className="summary-grid">

          <div className="summary-card">
            <span>Total Employees</span>
            <strong>{employees.length}</strong>
            <small>All employees</small>
          </div>

          <div className="summary-card">
            <span>Active Employees</span>
            <strong>{activeEmployees}</strong>
            <small>Currently working</small>
          </div>

          <div className="summary-card">
            <span>On Leave</span>
            <strong>{employeesOnLeave}</strong>
            <small>Currently on leave</small>
          </div>

        </section>

        {/* SEARCH + FILTER */}
        <section className="filters">

          <div className="search-box">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search employees..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            {departments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

        </section>

        {/* EMPLOYEE TABLE */}
        <section className="employee-card">

          <div className="table-heading">

            <div>
              <h2>Employees</h2>
              <p>Employee directory</p>
            </div>

            <span>
              {filteredEmployees.length} Employees
            </span>

          </div>

          <div className="table-wrapper">

            <table>

              <thead>
                <tr>
                  <th>ID</th>
                  <th>EMPLOYEE</th>
                  <th>DEPARTMENT</th>
                  <th>SALARY</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>

                {filteredEmployees.map((employee) => (

                  <tr key={employee.id}>

                    <td className="id-cell">
                      #{employee.id}
                    </td>

                    <td>

                      <div className="employee-info">

                        <div className="avatar">
                          {employee.initials}
                        </div>

                        <div>
                          <strong>{employee.name}</strong>
                          <small>{employee.email}</small>
                        </div>

                      </div>

                    </td>

                    <td>
                      {employee.department}
                    </td>

                    <td className="salary">
                      ₹{employee.salary.toLocaleString("en-IN")}
                    </td>

                    <td>

                      <span
                        className={
                          employee.status === "Active"
                            ? "status active"
                            : "status leave"
                        }
                      >
                        {employee.status}
                      </span>

                    </td>

                    <td>

                      <div className="actions">

                        <button
                          className="edit"
                          onClick={() =>
                            editEmployee(employee)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="delete"
                          onClick={() =>
                            deleteEmployee(employee.id)
                          }
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

                {filteredEmployees.length === 0 && (
                  <tr>
                    <td colSpan="6" className="empty">
                      No employees found.
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </section>

      </main>

    </div>
  );
}

