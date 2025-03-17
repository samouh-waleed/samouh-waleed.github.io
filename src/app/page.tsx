'use client'

import { Element } from 'react-scroll'
import Topbar from '@/components/Topbar'
import Home from '@/components/Home'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import MyWork from '@/components/MyWork'
import Resume from '@/components/Resume'
import ContactMe from '@/components/ContactMe'

export default function Page() {
  return (
    <div className="app-container">
      <Topbar />
      <div className="flex flex-nowrap">
        <div className="w-full">
          <Element name="home">
            <Home />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="mywork">
            <MyWork />
          </Element>
          <Element name="resume">
            <Resume />
          </Element>
          <Element name="contactme">
            <ContactMe />
          </Element>
        </div>
      </div>
    </div>
  )
}