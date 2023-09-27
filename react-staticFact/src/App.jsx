import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from '../components/Main'
import Navbar from '../components/NavBar'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  )
}

export default App
