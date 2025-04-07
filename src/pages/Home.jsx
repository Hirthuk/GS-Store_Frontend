import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSellers from '../components/BestSellers'
import { Outlet } from 'react-router-dom'
import Outpolicy from '../components/Outpolicy'
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollections></LatestCollections>
      <BestSellers/>
      <Outpolicy/>
    </div>
  )
}

export default Home
