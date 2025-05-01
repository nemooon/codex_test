import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>民泊マッチングプラットフォーム</h1>
      <nav>
        <Link to="/login">ログイン</Link> |{' '}
        <Link to="/register">会員登録</Link>
      </nav>
    </div>
  )
}
