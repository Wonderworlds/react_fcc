import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import Card from "../components/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/* <MainContent /> */}
      <Card />
    </>
  )
}

export default App
