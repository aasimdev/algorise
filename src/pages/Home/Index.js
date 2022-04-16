import React from 'react'
import { Outlet } from 'react-router-dom'
import CalculationCircles from './components/CalculationCircles'
import Contracts from './components/Contracts'
import CurrencyProgram from './components/CurrencyProgram'
import RecentPlatform from './components/RecentPlatform'

const Home = () => {
  return (
    <>
      <CurrencyProgram />
      <CalculationCircles />
      <Contracts />
      <RecentPlatform />
      <Outlet />
    </>
  )
}

export default Home