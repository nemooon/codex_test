import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function PropertyForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (id) {
      // 既存物件の読み込み(ダミー)
      setTitle(`物件${id}`)
      setDescription(`詳細説明${id}`)
    }
  }, [id])

  const handleSubmit = (e) => {
    e.preventDefault()
    // 送信処理(ダミー)
    navigate('/company/properties')
  }

  return (
    <div>
      <h2>{id ? '物件編集' : '物件登録'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>タイトル:</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>説明:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">保存</button>
      </form>
    </div>
  )
}
