import React from 'react'
import { getimageurl } from '../../util'
import styles from "./About.module.css"

export const About = () => {
  return (
    <>
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img className={styles.aboutImage} src={getimageurl("about/aboutImage.png")} alt='Me sitting with the Laptop' />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getimageurl("about/cursorIcon.png")} alt='CursorIcon' />
              <div className={styles.aboutItemText}>
                <h3>Project Engineer</h3>
                <p>I have worked on a Capstone Project at Wipro </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getimageurl("about/serverIcon.png")} alt='ServerIcon' />
              <div className={styles.aboutItemText}>
                <h3>Software Developer</h3>
                <p>I have experience developing fast and optimized applications(front-end) </p>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getimageurl("about/uiIcon.png")} alt='UiIcon' />
              <div className={styles.aboutItemText}>
                <h3> MERN Stack Mentee</h3>
                <p>I have recently completed my MERN Stack course from Guvi Geeks Pvt.Ltd </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
