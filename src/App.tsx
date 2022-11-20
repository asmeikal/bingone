import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Title } from "./Title";
import { Context, context } from "./game.context";
import { checkWin } from "./check-win";
import { Board } from "./Board";
import { Instructions } from "./Instructions";
import { Victory } from "./Victory";
import { randomize } from "./randomize";

function App() {
  const [size, setSize] = useState(4);
  const [rows, setRows] = useState(randomize(size));

  const [clicked, setClicked] = useState<Context["clicks"]>({});

  const reset = useCallback(() => {
    setRows(randomize(size));
    setClicked({});
  }, [size]);

  useEffect(() => {
    reset();
    document.documentElement.style.setProperty("--size", size.toString());
  }, [size, reset]);

  const winning = useMemo(() => {
    return checkWin(rows, clicked, size);
  }, [rows, clicked, size]);

  const onClick = useCallback(
    (key: string) => {
      if (winning.length === 0) {
        setClicked((c) => ({ ...c, [key]: !c[key] }));
      }
    },
    [winning]
  );

  const ctxValue = useMemo(
    () => ({
      clicks: clicked,
      click: onClick,
      winning,
      rows,
      setSize,
      reset,
    }),
    [clicked, onClick, winning, rows, setSize, reset]
  );

  return (
    <context.Provider value={ctxValue}>
      <Title />
      <Instructions />
      <Board />
      <Victory />
    </context.Provider>
  );
}

export default App;
