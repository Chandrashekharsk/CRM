import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import EmployeeDashboard from "./pages/dashboards/EmployeeDashboard";
import UserDashboard from "./pages/dashboards/UserDashboard";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/employee" element={
            <ProtectedRoute role="employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          } />
          <Route path="/user" element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
