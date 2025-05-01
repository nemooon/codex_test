import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SimulationManagement() {
  const [title, setTitle] = useState('')
  const navigate = useNavigate()

  const handleCreate = (e) => {
    e.preventDefault()
    // ダミーで作成しID 1
    navigate('/simulation/1')
  }

  return (
    <div>
      <h2>シミュレーション管理</h2>
      <form onSubmit={handleCreate}>
        <div>
          <label>シミュレーションタイトル:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <button type="submit">シミュレーション作成</button>
      </form>
    </div>
  )
}
