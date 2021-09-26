import React from 'react';

const Employee = props => {
  const { name, age, gender, salary, picture, company } = props.employee;
  return (
    <div class="col">
      <div class="card h-100">
        <img src={picture} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Age: {age}</p>
          <p class="card-text">Gender: {gender}</p>
          <p class="card-text">Company: {company}</p>
          <p class="card-text">Salary: {salary}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Salary: {salary}</small>
        </div>
      </div>
    </div>
  );
};

export default Employee;
