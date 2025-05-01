import React from 'react'
import { Link } from 'react-router-dom'

export default function UserDashboard() {
  return (
    <div>
      <h2>ユーザーダッシュボード</h2>
      <Link to="/user/properties">物件一覧を見る</Link>
    </div>
  )
}
