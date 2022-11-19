import React, { useCallback, useRef } from "react";
import styles from "./Instructions.module.css";
import { title } from "./Title";

export function Instructions() {
  const modal = useRef<HTMLDialogElement>(null);

  const openModal = useCallback(() => {
    modal.current?.showModal();
  }, []);

  const closeModal = useCallback(() => {
    modal.current?.close();
  }, []);

  return (
    <>
      <button className={styles.openButton} onClick={openModal}>
        Istruzioni
      </button>
      <dialog className={styles.modal} ref={modal}>
        <button className={styles.closeButton} onClick={closeModal}>
          Chiudi
        </button>
        <h1>Istruzioni</h1>
        <p>
          Invita i tuoi amici a guardare uno o più video del tuo{" "}
          <a
            href="https://www.youtube.com/playlist?list=PLXlfdqnqAz4UoxqrWL-pF7DzIvI6bswAZ"
            target="_blank"
            rel="noreferrer"
          >
            chef preferito
          </a>
          .
        </p>
        <p>Visitate {title} dal vostro dispositivo preferito.</p>
        <p>
          Quando il vostro chef preferito usa una delle sue tipiche espressioni,
          premete sul tasto corrispondente.
        </p>
        <p>
          Vince chi riesce a completare una riga, una colonna, o una diagonale
          per primo.
        </p>
      </dialog>
    </>
  );
}
