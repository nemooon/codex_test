import React from 'react'

export default function ContentManagement() {
  // ダミーデータ
  const contents = [
    { id: 1, title: '物件A資料' },
    { id: 2, title: '物件B資料' },
  ]

  return (
    <div>
      <h2>コンテンツ管理</h2>
      <ul>
        {contents.map((c) => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </div>
  )
}
