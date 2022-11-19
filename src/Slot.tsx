import React, { useCallback, useContext } from "react";
import { context } from "./game.context";
import styles from "./Slot.module.css";
import classnames from "classnames";

export const Slot = ({ value }: { value: string }) => {
  const { clicks, click, winning } = useContext(context);

  const onClick = useCallback(() => {
    click(value);
  }, [click, value]);

  const className = winning.includes(value)
    ? styles.win
    : clicks[value]
    ? styles.guessed
    : undefined;

  return (
    <div className={classnames(styles.slot, className)} onClick={onClick}>
      <p>{value}</p>
    </div>
  );
};
