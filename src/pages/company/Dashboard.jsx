import React from 'react'
import { Link } from 'react-router-dom'

export default function CompanyDashboard() {
  return (
    <div>
      <h2>不動産会社ダッシュボード</h2>
      <nav>
        <Link to="/company/properties">物件一覧</Link> |{' '}
        <Link to="/company/properties/new">物件登録</Link>
      </nav>
    </div>
  )
}
