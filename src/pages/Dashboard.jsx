import Chart from './../components/Chart'
import MainTable from '../components/Table/MainTable'
import TransactionProvider from '../context/TransactionProvider'
import BalanceCard from '../components/BalanceCard'
function Dashboard () {
  return (
      <TransactionProvider>
          <div className='w-1/1'></div>
          <main className='flex flex-row h-70 gap-16 items-center justify-center bg-color-[#151515]'>

              <div className='h-42'>
                  <Chart/>
                  <BalanceCard/>
              </div>
          </main>
          <section className='flex justify-center bg-color-[#151515]'>
              <MainTable />
          </section>
      </TransactionProvider>
  )
}

export default Dashboard
