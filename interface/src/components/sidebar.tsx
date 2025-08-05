import React from "react";
import styles from './sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <button className={styles.button}>Início</button>
        <button className={styles.button}>Guilda</button>
        <button className={styles.button}>Taberna</button>
      </div>
    </div>
  );
};

export default Sidebar;
