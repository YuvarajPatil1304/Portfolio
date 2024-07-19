import React from 'react'
import { getimageurl } from '../../util'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <>
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Yuvaraj</h1>
                <p className={styles.description}>I am a Full-Stack Developer(MERN). Reach out if you'd like to learn more!</p>
                <a className={styles.contactBtn} href='https://drive.google.com/file/d/1WS5104uXpy3i5B09uwRMZ6Lxbfl8tido/view?usp=drive_link'>Resume</a>
            </div>
            <img className={styles.heroImg} src={getimageurl("hero/heroImage.jpg")} alt="Hero image of me"/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
            
        </section>
    </>
  )
}
