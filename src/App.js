import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import AllNotes from "./components/Notes/AllNotes";
import NoteDetails from "./components/Notes/NoteDetails";
import CreateNote from "./components/Notes/CreateNote";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import GroupList from "./components/Groups/GroupList";
import GroupDetails from "./components/Groups/GroupDetails";
import CreateGroup from "./components/Groups/CreateGroup";
import LandingPage from "./components/LandingPage";
import AdminAuditLogs from "./components/AuditLogs/AdminAuditLogs";
import AccessDenied from "./components/Auth/AccessDenied";
import Admin from "./components/AuditLogs/Admin";
import UserProfile from "./components/Auth/UserProfile";
import ForgotPassword from "./components/Auth/ForgotPassword";
import OAuth2RedirectHandler from "./components/Auth/OAuth2RedirectHandler";
import ResetPassword from "./components/Auth/ResetPassword";
import { jwtDecode } from "jwt-decode";
import { Toaster } from "react-hot-toast";
import NotFound from "./components/NotFound";
import ContactPage from "./components/contactPage/ContactPage";
import AboutPage from "./components/aboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import "./styles/App.css";
import "./styles/Notes.css";

const App = () => {
  const getUserIdFromToken = () => {
    const token = localStorage.getItem("JWT_TOKEN");
    if (!token) return null;

    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.userId;
    } catch (error) {
      console.error("Failed to decode token", error);
      return null;
    }
  };

  const userId = getUserIdFromToken();

  return (
    <Router>
      <Navbar />
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />

          <Route
            path="/notes/:id"
            element={
              <ProtectedRoute>
                <NoteDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <AllNotes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-note"
            element={
              <ProtectedRoute>
                <CreateNote />
              </ProtectedRoute>
            }
          />
          <Route
            path="/groups"
            element={
              <ProtectedRoute>
                <GroupList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/groups/create"
            element={
              <ProtectedRoute>
                <CreateGroup />
              </ProtectedRoute>
            }
          />
          <Route
            path="/groups/:groupId"
            element={
              <ProtectedRoute>
                <GroupDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/audit-logs"
            element={
              <ProtectedRoute roles={["ROLE_ADMIN"]}>
                <AdminAuditLogs />
              </ProtectedRoute>
            }
          />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute roles={["ROLE_ADMIN"]} adminPage={true}>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfile userId={userId} />
              </ProtectedRoute>
            }
          />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
