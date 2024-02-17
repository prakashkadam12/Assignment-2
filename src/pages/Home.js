import React from 'react'
import { Hero } from '../components/Hero'
import { AboutUs } from '../components/AboutUs'
import { Articles } from '../components/Articles'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div className='flex justify-center items-center flex-col bg-[#FFFFFF]'>
       <Hero/>
       <AboutUs/>
       <Articles/>
       <Footer/>
    </div>
  )
}

export default Home
