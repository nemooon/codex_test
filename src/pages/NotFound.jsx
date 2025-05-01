import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h2>404 - ページが見つかりません</h2>
      <Link to="/">ホームへ戻る</Link>
    </div>
  )
}
