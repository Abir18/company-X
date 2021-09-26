import React, { useEffect, useState } from 'react';
import Employee from '../Employee/Employee';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch('./committee.json')
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {employees.map(employee => (
        <Employee key={employee._id} employee={employee}></Employee>
      ))}
    </div>
  );
};

export default Employees;
