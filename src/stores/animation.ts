import create from "zustand";
import { KEY_LIST } from "../constants";
import { KEY_TYPE } from "../types";

type STORETYPE = {
  addAnim: (text: string) => void;
  removeAnim: (text: string) => void;
  [key: string]: number | Function;
};

const animStore = create<STORETYPE>((set) => {
  var store: STORETYPE = {
    addAnim: (text: string) => set((state) => ({ [text]: (state[text] as number) + 1 })),
    removeAnim: (text: string) => set((state) => ({ [text]: (state[text] as number) - 1 })),
  };
  KEY_LIST.forEach((row) =>
    row.forEach((key) => {
      store[key.VALUE] = 0;
      store[key.SHIFT ?? ""] = 0;
    })
  );

  return store;
});

export default animStore;
