import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Project from './Project/Project'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Skills />
      <Project />
    </div>
  )
}

export default Home
