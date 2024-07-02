import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';
import { Base_url } from '../../config';
import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${Base_url}/admin/all-contact-info`);
        setContacts(response.data.contact);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
  ];

  return (
    <div className="contact-list-container">
      <h2>Contact List</h2>
      <Table dataSource={contacts} columns={columns} rowKey="_id" />
    </div>
  );
};

export default ContactList;
