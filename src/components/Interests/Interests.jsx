import React from "react";

import styles from "../Interests/Interests.module.css";

import interests from "../../data/interests.json";
import { InterestCard } from "./InterestCard";

export const Interests = () => {
  return (
    <section className={styles.container} id="interests">
      <h2 className={styles.title}>Interests</h2>
      <div className={styles.interests}>
        {interests.map((interest, id) => {
          return <InterestCard key={id} interest={interest} />;
        })}
      </div>
    </section>
  );
};