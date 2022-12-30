import create from "zustand";
import { CHARACTER } from "../types";

type STORETYPE = {
  line: CHARACTER[];
  lineWidth: number;
  paper: CHARACTER[][];
  setLine: (newChar: CHARACTER) => void;
  setLineWidth: (newWidth: number) => void;
  addLine: () => void;
  removeChar: () => void;
};

const paperStore = create<STORETYPE>((set) => ({
  line: [],
  lineWidth: 0,
  paper: [],
  setLine: (newChar: CHARACTER) => set((state) => ({ line: [...state.line, newChar] })),
  setLineWidth: (newWidth: number) => set((state) => ({ lineWidth: state.lineWidth + newWidth })),
  addLine: () => set((state) => ({ paper: [...state.paper, state.line] })),
  removeChar: () => set((state) => ({ line: state.line.slice(0, state.line.length - 1) })),
}));

export default paperStore;
