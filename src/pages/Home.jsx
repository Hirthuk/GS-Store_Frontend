import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSellers from '../components/BestSellers'
import { Outlet } from 'react-router-dom'
import Outpolicy from '../components/Outpolicy'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollections></LatestCollections>
      <BestSellers/>
      <Outpolicy/>
      <NewsLetter/>
    </div>
  )
}

export default Home
