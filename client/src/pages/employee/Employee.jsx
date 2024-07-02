import React, { useEffect, useState } from 'react';
import EmployeeCard from './EmployeeCard';
import './Employee.css';
import { Base_url } from '../../config';
import axios from 'axios';

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(`${Base_url}/admin/all-employee`, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
        console.log(response.data); // Check the actual response data structure
        setEmployees(response.data.employee); // Assuming response.data.employees contains the employee data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employee data:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="employee-list">
      {employees.map((employee, index) => (
        <EmployeeCard key={index} employee={employee} />
      ))}
    </div>
  );
};

export default Employee;
