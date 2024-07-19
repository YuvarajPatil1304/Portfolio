import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import styles from './App.module.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { Interests } from './components/Interests/Interests'

function Dashboard() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <div className={styles.App}>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Interests />
            <Contact />
        </div>
      </>
    )
  )
}

export default Dashboard