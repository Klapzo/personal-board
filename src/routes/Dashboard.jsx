import React, { useState } from 'react'
import Chart from './../components/Chart'
import PrimaryInput from '../components/PrimaryInput'
import MainTable from '../components/Table/MainTable'
import TransactionProvider from '../context/TransactionProvider'
function Dashboard () {
  const [inputs, setInputs] = useState([
    { id: 1, name: 'ingresos', value: 0, color: 'warning' },
    { id: 2, name: 'ahorros', value: 0, color: 'secondary' },
    { id: 3, name: 'gastos', value: 0, color: 'danger' }
  ])
  const handleChange = (id, value) => {
    setInputs(inputs.map(input => {
      if (input.id === id) {
        input.value = value
      }
      return input
    }))
  }
  const data = {
    labels: ['resto', 'ahorros', 'gastos'],
    datasets: [
      {
        label: '$',
        data: [inputs[0].value - (inputs[1].value - inputs[2].value), inputs[1].value, inputs[2].value],
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 99, 132, 0.5)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }
    ]
  }
  return (
      <>
          <main className='flex flex-row w-[100%] h-[70%] gap-16 items-center justify-center'>

              <div className='flex flex-col gap-10'>
                  {inputs.map((input) => (
                      <PrimaryInput key={input.id} initialValue={input.value} color={input.color} label={input.name} value={input.value} handleChange={event => handleChange(input.id, event.target.value)}/>
                  ))}

              </div>
              <div className='h-42'>
                  <Chart data={data}/>

              </div>
          </main>
          <section className='w-[100%] h-[80%] flex justify-center bg-color-[#151515]'>
              <TransactionProvider>

                  <MainTable />
              </TransactionProvider>
          </section>
      </>
  )
}

export default Dashboard
