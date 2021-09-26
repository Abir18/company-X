import React from 'react';

const Details = props => {
  const { details } = props;
  //   console.log(props);
  //   console.log(details);

  let total = 0;
  for (const detail of details) {
    total = total + detail.salary;
  }
  return (
    <div>
      <h2>Total Employee: {details.length}</h2>
      {/* <h3>Name: {details}</h3> */}
      {details.map(d => (
        <h4 key={Math.random()}>{d.name}</h4>
      ))}
      <h3>Total Salary: ${total}</h3>
    </div>
  );
};

export default Details;
