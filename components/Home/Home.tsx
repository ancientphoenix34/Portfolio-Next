import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Skills from './Skills/Skills'
import Project from './Project/Project'
import Experience from './Experience/Experience'
import Reviews from './Reviews/Reviews'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Reviews />
      <Contact />
    </div>
  )
}

export default Home
