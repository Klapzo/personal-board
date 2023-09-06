import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useTransaction } from '../context/TransactionProvider'
ChartJS.register(ArcElement, Tooltip, Legend)
function Chart () {
  const { transactions, isLoading } = useTransaction()
  const [amounts, setAmounts] = useState(null)
  const [chartData, setChartData] = useState([0, 0, 0, 0])

  const colorMap = {
    background: { gasto: '#3e2623', resto: '#021b37', ahorro: '#292034', inversion: '#13463f' },
    border: { gasto: '#b2523b', resto: '#3669a1', ahorro: '#6e4398', inversion: '#01fac8' }
  }
  async function update () {
    const restos = amounts.ingreso - (amounts.gasto + amounts.inversion + amounts.ahorro)
    setAmounts((prev) => ({ ...prev, resto: restos }))
    const newObject = {}
    for (const key in amounts) {
      if (key !== 'ingreso') {
        newObject[key] = amounts[key]
      }
    }
    setChartData(Object.values(newObject))
    Chart.update()
  }
  const data = {
    labels: Object.keys(colorMap.background),
    datasets: [
      {
        label: '$',
        data: chartData,
        backgroundColor: Object.values(colorMap.background),
        borderColor: Object.values(colorMap.border),
        borderWidth: 2
      }
    ]
  }
  useEffect(() => {
    setAmounts({
      gasto: 0,
      resto: 0,
      ahorro: 0,
      inversion: 0,
      ingreso: 0
    })
    transactions.forEach(transaction => {
      if (transaction?.transaction_type === 'Ahorro') {
        const ahorros = transaction.quantity
        setAmounts((prev) => ({ ...prev, ahorro: prev.ahorro + ahorros }))
      }
      if (transaction?.transaction_type === 'Inversión') {
        const inversiones = transaction.quantity
        setAmounts((prev) => ({ ...prev, inversion: prev.inversion + inversiones }))
      }
      if (transaction?.transaction_type === 'Gasto') {
        const gastos = transaction.quantity
        setAmounts((prev) => ({ ...prev, gasto: prev.gasto + gastos }))
      }
      if (transaction?.transaction_type === 'Ingreso') {
        const ingresos = transaction.quantity
        setAmounts((prev) => ({ ...prev, ingreso: prev.ingreso + ingresos }))
      }

      update()
    })
  }, [transactions, isLoading])

  return (
      <Pie
    data={data}
    />
  )
}

export default Chart
