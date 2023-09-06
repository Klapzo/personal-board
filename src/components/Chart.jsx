import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useTransaction } from '../context/TransactionProvider'
import { getQuantities } from '../utils/fetchDatabase'
ChartJS.register(ArcElement, Tooltip, Legend)
function Chart () {
  const { transactions, isLoading } = useTransaction()
  const [dataset, setDataset] = useState([0, 0, 0, 0])

  const colorMap = {
    background: { gasto: '#3e2623', resto: '#46462d', ahorro: '#292034', inversion: '#13463f' },
    border: { gasto: '#b2523b', resto: '#e6e46b', ahorro: '#6e4398', inversion: '#01fac8' }
  }

  const data = {
    labels: Object.keys(colorMap.background),
    datasets: [
      {
        label: '$',
        data: dataset || [0, 0, 0, 0],
        backgroundColor: Object.values(colorMap.background),
        borderColor: Object.values(colorMap.border),
        borderWidth: 2
      }
    ]
  }
  useEffect(() => {
    async function updateQuantities () {
      const data = await getQuantities()
      const quantitiesObj = {}
      data.forEach((transaction) => {
        const key = transaction.transaction_type
        const value = transaction.quantity

        if (key in quantitiesObj) {
          quantitiesObj[key] += value
        } else {
          quantitiesObj[key] = value
        }
      })
      quantitiesObj.Resto = quantitiesObj.Ingreso - (quantitiesObj['Inversión'] + quantitiesObj.Gasto + quantitiesObj.Ahorro)

      setDataset([quantitiesObj.Gasto, quantitiesObj.Resto, quantitiesObj.Ahorro, quantitiesObj['Inversión']])
    }
    updateQuantities()
  }, [transactions, isLoading])

  return (
      <Pie
    data={data}
    />
  )
}

export default Chart
