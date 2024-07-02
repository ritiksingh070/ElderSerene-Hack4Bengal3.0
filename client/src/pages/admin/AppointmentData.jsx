import React, { useState, useEffect } from 'react';
import { Divider, Table, Select, Button, Modal, Form, message } from 'antd';
import axios from 'axios';
import { Base_url } from '../../config'; // Adjust the import according to your project structure

 
const { Option } = Select;
const { confirm } = Modal;


const AppointmentData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectionType, setSelectionType] = useState('checkbox');
  const [filter, setFilter] = useState('');
  const [employees, setEmployees] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const showAssignModal = (record) => {
    setSelectedAppointment(record);
    setVisible(true);
  };
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Message',
      dataIndex: 'message',
    },
    {
      title: 'Service Type',
      dataIndex: 'service_type',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, record) => (
        <Button type="primary" onClick={() => showAssignModal(record)}>
          Activate
        </Button>
      ),
    },
  ];
  
  useEffect(() => {
    fetchData();
    fetchEmployees();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${Base_url}/appointment/get-all-appointment`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      const formattedData = response.data.appointment.map((item, index) => ({
        key: index.toString(),
        ...item,
      }));
      setData(formattedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching appointment data:', error);
      setLoading(false);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`${Base_url}/admin/all-employee`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      setEmployees(response.data.employee);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredData = filter
    ? data.filter((item) => item.service_type === filter)
    : data;

 
    const handleAssignEmployee = async () => {
      try {
        const updatedAppointment = { ...selectedAppointment, status: 'Activate', assignedEmployee: selectedEmployee };
        if (!selectedAppointment || !selectedEmployee) {
          return message.error('Please select an appointment and an employee.');
        }
        const response = await axios.put(
          `${Base_url}/appointment/update-appointment/${selectedAppointment._id}`,
          updatedAppointment,
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );
        console.log(response.data);
        message.success('Appointment activated and employee assigned successfully!');
        setVisible(false);
        fetchData(); // Refresh data after update
      } catch (error) {
        console.error('Error assigning employee:', error);
        message.error('Failed to assign employee to appointment.');
      }
    };
    
    
  const handleCancel = () => {
    setVisible(false);
    setSelectedAppointment(null);
    setSelectedEmployee(null);
  };

  const handleEmployeeSelect = (value) => {
    setSelectedEmployee(value);
  };

  return (
    <div>
      <Divider />
      <div style={{ marginBottom: '16px' }}>
        <Select
          placeholder="Select Service Type"
          onChange={handleFilterChange}
          style={{ width: 200 }}
        >
          <Option value="">All Service Types</Option>
          <Option value="Daily Living Assistance">Daily Living Assistance</Option>
          <Option value="Healthcare Services">Healthcare Services</Option>
          <Option value="Health Monitoring and Checkups">Health Monitoring and Checkups</Option>
          <Option value="Social Engagement and Mental Well-Being">Social Engagement and Mental Well-Being</Option>
          <Option value="Convenience Services">Convenience Services</Option>
          <Option value="Safety and Emergency Response">Safety and Emergency Response</Option>
        </Select>
        <Button onClick={() => setFilter('')} style={{ marginLeft: '8px' }}>
          Reset Filter
        </Button>
      </div>
      <Table
        rowSelection={{
          type: selectionType,
        }}
        columns={columns}
        dataSource={filteredData}
        loading={loading}
        pagination={{ pageSize: 7 }}
      />
      <Modal
        title="Assign Employee"
        visible={visible}
        onOk={handleAssignEmployee}
        onCancel={handleCancel}
      >
        <Form.Item label="Select Employee">
          <Select
            style={{ width: '100%' }}
            placeholder="Select an employee"
            onChange={handleEmployeeSelect}
          >
            {employees.map((employee) => (
              <Option key={employee._id} value={employee._id}>
                {employee.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Modal>
    </div>
  );
};

export default AppointmentData;
