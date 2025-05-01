import React from 'react'

export default function UserManagement() {
  // ダミーデータ
  const users = [
    { id: 1, username: 'user1', role: 'user' },
    { id: 2, username: 'company1', role: 'company' },
  ]

  return (
    <div>
      <h2>ユーザー管理</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>ユーザー名</th>
            <th>役割</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.username}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
