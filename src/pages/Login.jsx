import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [username, setUsername] = useState('')
  const [role, setRole] = useState('user')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(username, role)
    if (role === 'company') navigate('/company/dashboard')
    else if (role === 'admin') navigate('/admin/dashboard')
    else navigate('/user/dashboard')
  }

  return (
    <div>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ユーザー名:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>役割:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">ユーザー</option>
            <option value="company">不動産会社</option>
            <option value="admin">管理者</option>
          </select>
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  )
}
