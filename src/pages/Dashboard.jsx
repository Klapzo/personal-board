import React, { useState } from 'react'
import Chart from './../components/Chart'
import MainTable from '../components/Table/MainTable'
import TransactionProvider from '../context/TransactionProvider'
function Dashboard () {
  return (
      <TransactionProvider>
          <main className='flex flex-row w-[100%] h-[70%] gap-16 items-center justify-center'>

              <div className='h-42'>
                  <Chart/>

              </div>
          </main>
          <section className='w-[100%] h-[80%] flex justify-center bg-color-[#151515]'>

              <MainTable />
          </section>
      </TransactionProvider>
  )
}

export default Dashboard
