import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Register() {
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
      <h2>会員登録</h2>
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
          </select>
        </div>
        <button type="submit">登録</button>
      </form>
    </div>
  )
}
