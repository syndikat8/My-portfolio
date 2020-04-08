import React from 'react';
import styles from './Skills.module.css';
import Skil from "./Skil/Skil";

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.mySkills}>
          <h2> Мои скилы </h2>
        </div>
        <div className={styles.allSkil}>
          <Skil/>
          <Skil/>
          <Skil/>

        </div>
      </div>
    </div>

  );
}

export default Skills;