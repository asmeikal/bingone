import React, { useCallback, useMemo, useState } from "react";
import { Title } from "./Title";
import { Context, context } from "./game.context";
import { checkWin } from "./check-win";
import { rows } from "./setup";
import { Board } from "./Board";

function App() {
  const [clicked, setClicked] = useState<Context["clicks"]>({});

  const winning = useMemo(() => {
    return checkWin(rows, clicked);
  }, [clicked]);

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
    }),
    [clicked, onClick, winning]
  );

  return (
    <context.Provider value={ctxValue}>
      <Title />
      <Board />
    </context.Provider>
  );
}

export default App;
