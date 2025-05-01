import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function SimulationView() {
  const { id } = useParams()
  const [data, setData] = useState({ labels: [], datasets: [] })

  useEffect(() => {
    const labels = Array.from({ length: 12 }, (_, i) => `${i + 1}月`)
    const values = labels.map(() => Math.floor(Math.random() * 1000) + 100)
    setData({
      labels,
      datasets: [
        {
          label: `収益シミュレーション ${id}`,
          data: values,
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)'
        }
      ]
    })
  }, [id])

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: '収益シミュレーション' }
    }
  }

  return (
    <div>
      <h2>シミュレーションビュー (ID: {id})</h2>
      <div style={{ maxWidth: 600 }}>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}
