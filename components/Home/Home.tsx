import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Project from './Project/Project'
import Experience from './Experience/Experience'
import Reviews from './Reviews/Reviews'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Reviews />
    </div>
  )
}

export default Home
