<<<<<<< HEAD
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminSidebar from './AdminAreaSidebar';
import AuditLogs from './AdminAuditLogs';
import UserList from './UserList';
import UserDetails from './UserDetails';
import '../../styles/Admin.css';

const Admin = () => {
  return (
    <div className="admin-page">
      <AdminSidebar />
      <div className="admin-content">
        <Routes>
          <Route path="audit-logs" element={<AuditLogs />} />
=======
import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminSidebar from "./AdminAreaSidebar";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import { useMyContext } from "../../store/ContextApi";
import AuditLogsDetails from "./AuditLogsDetails";
import AdminAuditLogs from "./AdminAuditLogs";

const Admin = () => {
  // Access the openSidebar hook using the useMyContext hook from the ContextProvider
  const { openSidebar } = useMyContext();
  return (
    <div className="flex">
      <AdminSidebar />
      <div
        className={`transition-all overflow-hidden flex-1 duration-150 w-full min-h-[calc(100vh-74px)] ${
          openSidebar ? "lg:ml-52 ml-12" : "ml-12"
        }`}
      >
        <Routes>
          <Route path="audit-logs" element={<AdminAuditLogs />} />
          <Route path="audit-logs/:noteId" element={<AuditLogsDetails />} />
>>>>>>> new-code
          <Route path="users" element={<UserList />} />
          <Route path="users/:userId" element={<UserDetails />} />
          {/* Add other routes as necessary */}
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
