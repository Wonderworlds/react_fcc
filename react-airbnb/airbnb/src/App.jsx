import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import Card from "../components/Card"
import CardData from "./data.js"

function App() {
  const dataElement = CardData.map((card) =>
      {return <Card 
          key={card.id}
          img={card.coverImg}
          rating={card.stats.rating}
          reviewCount={card.stats.reviewCount}
          location={card.location}
          title={card.title}
          price={card.price}
          currency="$"
        />
      }
    )

  return (
    <>
      <Navbar />
      <MainContent />
      <div className="card--div">
        {dataElement}
      </div>
    </>
  )
}

export default App
