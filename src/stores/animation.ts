import create from "zustand";
import { KEY_LIST, KEY_MAP } from "../constants";
import { KEY_TYPE } from "../types";

type STORETYPE = {
  [key: string]: number | Function;
};

const animStore = create<STORETYPE>((set) => {
  var store: { [key: string]: number | Function } = {};
  KEY_LIST.forEach((row) => row.forEach((key) => (store[key.VALUE] = 0)));

  store["addAnim"] = (el: KEY_TYPE) => set((state) => ({ [el.VALUE]: (state[el.VALUE] as number) + 1 }));
  store["removeAnim"] = (el: KEY_TYPE) => set((state) => ({ [el.VALUE]: (state[el.VALUE] as number) - 1 }));

  return store;
});
