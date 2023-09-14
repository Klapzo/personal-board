import Chart from './../components/Chart/Chart'
import MainTable from '../components/Table/MainTable'
import TransactionProvider from '../context/TransactionProvider'
import BalanceCard from '../components/BalanceCard'
function Dashboard () {
  return (
      <TransactionProvider>
          <main className="flex flex-row h-70 gap-16 items-center justify-center bg-color-[#151515]">
              <div className="h-42 w-96 lg:w-120 flex mt-2 lg:flex-row flex-col gap-2 lg:gap-12 items-center">
                  <Chart />
                  <BalanceCard />
              </div>
          </main>
          <section className="flex flex-col items-center justify-center bg-color-[#151515]">
              <MainTable />
          </section>
      </TransactionProvider>
  )
}

export default Dashboard
