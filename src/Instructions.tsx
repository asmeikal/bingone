import React, { useCallback, useContext, useRef } from "react";
import styles from "./Instructions.module.css";
import { title } from "./Title";
import { context } from "./game.context";

export function Instructions() {
  const modal = useRef<HTMLDialogElement>(null);

  const { setSize } = useContext(context);

  const openModal = useCallback(() => {
    modal.current?.showModal();
  }, []);

  const closeModal = useCallback(() => {
    modal.current?.close();
  }, []);

  const updateSize = useCallback(
    (size: number) => {
      setSize(size);
      modal.current?.close();
    },
    [setSize]
  );

  return (
    <>
      <button className={styles.openButton} onClick={openModal}>
        ?
      </button>
      <dialog className={styles.modal} ref={modal}>
        <button className={styles.closeButton} onClick={closeModal}>
          X
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
        <p>Regola la difficoltà:</p>
        <ul>
          <li>
            <button className={styles.difficulty} onClick={() => updateSize(3)}>
              Facile (3x3)
            </button>
          </li>
          <li>
            <button className={styles.difficulty} onClick={() => updateSize(4)}>
              Medio (4x4)
            </button>
          </li>
          <li>
            <button className={styles.difficulty} onClick={() => updateSize(5)}>
              Difficile (5x5)
            </button>
          </li>
        </ul>
      </dialog>
    </>
  );
}
