import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Employee from '../Employee/Employee';
import './Employees.css';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch('./committee.json')
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  const handleAddtoDetails = emp => {
    const addEmp = [...details, emp];
    setDetails(addEmp);
  };
  return (
    <div className="employees-container">
      <div className="row row-cols-1 row-cols-md-3 g-4 employee">
        {employees.map(employee => (
          <Employee
            key={employee._id}
            employee={employee}
            handleAddtoDetails={handleAddtoDetails}
          ></Employee>
        ))}
      </div>
      <div className="employees-details">
        <Details details={details}></Details>
      </div>
    </div>
  );
};

export default Employees;
