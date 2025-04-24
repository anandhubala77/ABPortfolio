import React from 'react'
import { Element } from 'react-scroll'
import Hero from '../Hero'
import Projects from '../Projects'
import AboutMe from '../AboutMe'
import { ContactForm } from '../ContactForm'

export const Home = () => {
  return (
    <>
      <Element name="home">
        <Hero />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="about">
        <AboutMe />
      </Element>

      <Element name="contact">
        <ContactForm />
      </Element>
    </>
  )
}
