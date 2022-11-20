import React, { useCallback, useContext, useEffect, useRef } from "react";
import { context } from "./game.context";

export function Victory() {
  const { winning, reset } = useContext(context);

  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (winning.length > 0) {
      modal.current?.showModal();
    }
  }, [winning]);

  const playAgain = useCallback(() => {
    reset();
    modal.current?.close();
  }, [reset]);

  return (
    <dialog ref={modal}>
      <h1>Hai vinto!</h1>
      <button onClick={playAgain}>Gioca di nuovo</button>
    </dialog>
  );
}
