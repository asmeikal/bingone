import React, { useContext } from "react";
import styles from "./Board.module.css";
import { Row } from "./Row";
import { context } from "./game.context";

export function Board() {
  const { rows } = useContext(context);

  return (
    <main className={styles.board}>
      {rows.map((row, idx) => (
        <Row row={row} key={`row-${idx}`} />
      ))}
    </main>
  );
}
