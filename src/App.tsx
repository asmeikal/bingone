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

  const rows = useMemo(() => {
    return randomize(size);
  }, [size]);

  const [clicked, setClicked] = useState<Context["clicks"]>({});

  useEffect(() => {
    document.documentElement.style.setProperty("--size", size.toString());
    setClicked({});
  }, [size]);

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
    }),
    [clicked, onClick, winning, rows, setSize]
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
