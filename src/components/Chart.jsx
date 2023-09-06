import React, { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useTransaction } from '../context/TransactionProvider'

ChartJS.register(ArcElement, Tooltip, Legend)
function Chart () {
  const { isLoading, quantities, updateQuantities } = useTransaction()
  const [quantitiesDataset, setQuantitiesDataset] = useState([0, 0, 0])

  const colorMap = {
    background: { gastos: '#5f2b1f', ahorros: '#251238', inversiones: '#004c3d' },
    border: { gasto: '#f39882', ahorro: '#8e6daf', inversion: '#01fac8' }
  }

  const data = {
    labels: Object.keys(colorMap.background),
    datasets: [
      {
        label: '$',
        data: quantitiesDataset || [0, 0, 0],
        backgroundColor: Object.values(colorMap.background),
        borderColor: Object.values(colorMap.border),
        borderWidth: 1
      }
    ]
  }
  useEffect(() => {
    updateQuantities()
    setQuantitiesDataset([quantities.Gasto, quantities.Ahorro, quantities['Inversión']])
  }, [quantities, isLoading])

  return (
      <div>
          <Doughnut
    data={data}
    options={ {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }

      }
    }}

    />
      </div>
  )
}

export default Chart
