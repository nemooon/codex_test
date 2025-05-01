import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import CompanyDashboard from './pages/company/Dashboard'
import PropertyList from './pages/company/PropertyList'
import PropertyForm from './pages/company/PropertyForm'
import UserDashboard from './pages/user/Dashboard'
import UserPropertyList from './pages/user/PropertyList'
import PropertyDetails from './pages/user/PropertyDetails'
import AdminDashboard from './pages/admin/Dashboard'
import UserManagement from './pages/admin/UserManagement'
import ContentManagement from './pages/admin/ContentManagement'
import SimulationManagement from './pages/admin/SimulationManagement'
import SimulationView from './pages/SimulationView'
import NotFound from './pages/NotFound'

function AppRoutes() {
  const { user } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" replace />} />

        <Route element={<ProtectedRoute role="company" />}>
          <Route path="/company/dashboard" element={<CompanyDashboard />} />
          <Route path="/company/properties" element={<PropertyList />} />
          <Route path="/company/properties/new" element={<PropertyForm />} />
          <Route path="/company/properties/:id" element={<PropertyForm />} />
        </Route>

        <Route element={<ProtectedRoute role="user" />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/properties" element={<UserPropertyList />} />
          <Route path="/user/properties/:id" element={<PropertyDetails />} />
        </Route>

        <Route element={<ProtectedRoute role="admin" />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/contents" element={<ContentManagement />} />
          <Route path="/admin/simulations" element={<SimulationManagement />} />
        </Route>

        <Route element={<ProtectedRoute role={["company", "user"]} />}>
          <Route path="/simulation/:id" element={<SimulationView />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}
