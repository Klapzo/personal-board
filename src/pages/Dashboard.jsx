import Chart from './../components/Chart'
import MainTable from '../components/Table/MainTable'
import TransactionProvider from '../context/TransactionProvider'
import BalanceCard from '../components/BalanceCard'
function Dashboard () {
  return (
      <TransactionProvider>
          <main className='flex flex-row h-70 gap-16 items-center justify-center bg-color-[#151515]'>

              <div className='h-42 w-80 flex mt-2 flex-col gap-2'>
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
