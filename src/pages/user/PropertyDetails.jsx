import React from 'react'
import { useParams } from 'react-router-dom'

export default function PropertyDetails() {
  const { id } = useParams()

  return (
    <div>
      <h2>物件詳細 (ID: {id})</h2>
      <p>ここに物件詳細情報が表示されます。</p>
      <form>
        <h3>問い合わせ</h3>
        <textarea placeholder="お問い合わせ内容" required />
        <button type="submit">送信</button>
      </form>
    </div>
  )
}
