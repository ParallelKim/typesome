import create from "zustand";
import { CHAR_TYPE } from "../types";

type STORETYPE = {
  line: CHAR_TYPE[];
  lineWidth: number;
  paper: CHAR_TYPE[][];
  setLine: (newChar: CHAR_TYPE) => void;
  setLineWidth: (newWidth: number) => void;
  addLine: () => void;
  removeChar: () => void;
};

const paperStore = create<STORETYPE>((set) => ({
  line: [],
  lineWidth: 0,
  paper: [],
  setLine: (newChar: CHAR_TYPE) => set((state) => ({ line: [...state.line, newChar] })),
  setLineWidth: (newWidth: number) => set((state) => ({ lineWidth: state.lineWidth + newWidth })),
  addLine: () => set((state) => ({ paper: [...state.paper, state.line], line: [] })),
  removeChar: () => set((state) => ({ line: state.line.slice(0, state.line.length - 1) })),
}));

export default paperStore;
