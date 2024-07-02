import React from 'react';
import './Employee.css';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <h2>{employee.name}</h2>
      <p>Type: {employee.employeeType}</p>
      <p>Specialization: {employee.specialization}</p>
      <p>Experience: {employee.experienceYears} years</p>
      <p>Contact: {employee.contactNumber}</p>
      <p>Email: {employee.email}</p>
    </div>
  );
};

export default EmployeeCard;
