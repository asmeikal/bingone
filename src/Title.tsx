import React from "react";
import "./Title.module.css";

const titles = ["Bingone", "B come BINGO", "Molto Molto Bingo"];

const title = titles[Math.floor(Math.random() * titles.length)];

document.title = title;

export function Title() {
  return <h1>{title}</h1>;
}
