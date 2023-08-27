import MainButton from '../components/MainButton'
import { FaArrowRight } from 'react-icons/fa'

function App () {
  return (
      <>
          <main className="flex flex-col h-96 justify-center text-center">
              <h1 className="font-argentum text-9xl font-extrabold">Personal Board</h1>
              <h2 className="font-argentum text-2xl font-extrabold">track your habits, finances & more</h2>
              <MainButton rightIcon={<FaArrowRight/>}>Get Started</MainButton>
          </main>
      </>
  )
}

export default App
