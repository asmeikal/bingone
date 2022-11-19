import React from "react";
import styles from "./Row.module.css";
import { Slot } from "./Slot";

interface RowProps {
  row: string[];
}

export function Row({ row }: RowProps) {
  return (
    <div className={styles.row}>
      {row.map((el) => (
        <Slot value={el} key={el} />
      ))}
    </div>
  );
}
