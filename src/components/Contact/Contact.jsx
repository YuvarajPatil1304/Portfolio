import React from "react";

import styles from "./Contact.module.css";
import { getimageurl } from "../../util";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getimageurl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:yuvarajpatil1304@gmail.com">yuvarajpatil1304@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getimageurl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://in.linkedin.com/in/sai-yuvaraj-patil-4444331b2">linkedin.com/SaiYuvarajPatil</a>
        </li>
        <li className={styles.link}>
          <img src={getimageurl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/YuvarajPatil1304">github.com/SaiYuvarajPatil</a>
        </li>
      </ul>
    </footer>
  );
};