import React from 'react';

const Employee = props => {
  const { name, age, gender, salary, picture, company, email } = props.employee;
  const { handleAddtoDetails } = props;
  // console.log(props);
  return (
    <div className="col">
      <div className="card h-100">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Gender: {gender}</p>
          <p className="card-text">email: {email}</p>
          <p className="card-text">Company: {company}</p>
          <p className="card-text">Salary: ${salary}</p>
        </div>
        {/* <button>Details</button> */}
        <button
          onClick={() => handleAddtoDetails(props.employee)}
          type="button"
          className="btn btn-info"
        >
          <i className="fas fa-arrow-alt-circle-right"></i>
          Details
        </button>
      </div>
    </div>
  );
};

export default Employee;
