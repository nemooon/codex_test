import React from 'react'
import { Link } from 'react-router-dom'

export default function PropertyList() {
  // ダミーデータ
  const properties = [
    { id: 1, title: '物件A' },
    { id: 2, title: '物件B' },
  ]

  return (
    <div>
      <h2>物件一覧</h2>
      <ul>
        {properties.map((p) => (
          <li key={p.id}>
            <Link to={`/company/properties/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
