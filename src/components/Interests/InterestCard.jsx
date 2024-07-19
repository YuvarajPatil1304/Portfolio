import React from "react";

import styles from "../Interests/InterestCard.module.css";
import { getimageurl } from "../../util";

export const InterestCard = ({
  interest: { title, imageSrc, demo },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getimageurl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          View
        </a>
      </div>
    </div>
  );
};