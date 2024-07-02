import React, { useState, useEffect } from 'react';
import './Admin.css';
import AppointmentData from './AppointmentData';
import Employee from '../employee/Employee';
import ContactList from './ContactList';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('Appointment');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // SIDEBAR TOGGLE
    const sidebar = document.getElementById('sidebar');

    const openSidebar = () => {
      if (!sidebarOpen) {
        sidebar.classList.add('sidebar-responsive');
        setSidebarOpen(true);
      }
    };

    const closeSidebar = () => {
      if (sidebarOpen) {
        sidebar.classList.remove('sidebar-responsive');
        setSidebarOpen(false);
      }
    };

    window.openSidebar = openSidebar;
    window.closeSidebar = closeSidebar;

  }, [sidebarOpen]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSidebarOpen(false); // Close sidebar on mobile view after clicking a link
  };

  return (
    <div className={`dashboard-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
      {/* <!-- Header --> */}
      <header className="header">
        <div className="menu-icon" onClick={() => window.openSidebar()}>
          <span className="material-icons-outlined"><i className="fa-solid fa-bars"></i></span>
        </div>
        <div className='site-logo'><h1></h1></div>
        <div className="header-left">
          <input type="text" placeholder='Search' />
        </div>
        <div className="header-right">
          <i className="fa-regular fa-bell"></i>
          <i className="fa-regular fa-envelope"></i>
          <i className="fa-regular fa-user"></i>
        </div>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- Sidebar --> */}
      <aside id="sidebar">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            
          </div>
          <span className="material-icons-outlined" onClick={() => window.closeSidebar()}><i className="fa-solid fa-xmark"></i></span>
        </div>

        <ul className="sidebar-list" onClick={() => window.closeSidebar()}>
          <li className={`sidebar-list-item ${activeTab === 'Appointment' ? 'active' : ''}`} onClick={() => handleTabClick('Appointment')}>
            Appointment
          </li>
          <li className={`sidebar-list-item ${activeTab === 'Completed-appointments' ? 'active' : ''}`} onClick={() => handleTabClick('Completed-appointments')}>
            Completed appointments
          </li>
          <li className={`sidebar-list-item ${activeTab === 'Ongoing' ? 'active' : ''}`} onClick={() => handleTabClick('Ongoing')}>
            Ongoing Appointments
          </li>
          <li className={`sidebar-list-item ${activeTab === 'Employee' ? 'active' : ''}`} onClick={() => handleTabClick('Employee')}>
            Employee
          </li>
          <li className={`sidebar-list-item ${activeTab === 'ContactInfo' ? 'active' : ''}`} onClick={() => handleTabClick('ContactInfo')}>
          ContactInfo
          </li>
        </ul>
      </aside>
      {/* <!-- End Sidebar --> */}

      {/* <!-- Main --> */}
      <main className="main-container">
        {activeTab === 'dashboard' && (
          <div className="main-title">
            <p className="font-weight-bold">DASHBOARD</p>
          </div>
        )}
        {activeTab === 'Appointment' && (
          <div className="appointment-data">
            <div><h2>All Appointments</h2></div>
            <AppointmentData />
          </div>
        )}
        {activeTab === 'Employee' && (
          <div className="appointment-data">
           
            <div><h2>All Employee</h2></div>
           
          <Employee/>
          
          </div>
        )}
        {activeTab === 'ContactInfo' && (
          <div className="appointment-data">
           
            <div><h2>All Contact Info</h2></div>
           
          <ContactList/>
          
          </div>
        )}
        {activeTab === 'Ongoing' && (
          <div className="appointment-data">
           
            On Going Details
          </div>
        )}
        {activeTab === 'Completed-appointments' && (
          <div className="appointment-data">
           
            Completed appointments
          </div>
        )}
        {/* Add content for other tabs as needed */}
      </main>
      {/* <!-- End Main --> */}
    </div>
  );
}

export default Admin;
