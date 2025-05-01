import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminDashboard() {
  return (
    <div>
      <h2>管理者ダッシュボード</h2>
      <nav>
        <Link to="/admin/users">ユーザー管理</Link> |{' '}
        <Link to="/admin/contents">コンテンツ管理</Link> |{' '}
        <Link to="/admin/simulations">シミュレーション管理</Link>
      </nav>
    </div>
  )
}
