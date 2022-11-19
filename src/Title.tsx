import React from "react";
import styles from "./Title.module.css";

const titles = ["Bingone", "B come BINGO", "Molto Molto Bingo"];

export const title = titles[Math.floor(Math.random() * titles.length)];

document.title = title;

export function Title() {
  return <h1 className={styles.title}>{title}</h1>;
}
