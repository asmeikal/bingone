import { createContext } from "react";

export interface Context {
  clicks: { [key: string]: boolean };
  click: (key: string) => void;
  winning: string[];
}

export const context = createContext<Context>({
  click: () => {},
  clicks: {},
  winning: [],
});
