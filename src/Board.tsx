import React from "react";
import styles from "./Board.module.css";
import { rows } from "./setup";
import { Row } from "./Row";

export function Board() {
  return (
    <main className={styles.board}>
      {rows.map((row, idx) => (
        <Row row={row} key={`row-${idx}`} />
      ))}
    </main>
  );
}
