import create from "zustand";

type STORETYPE = {
  sound: HTMLAudioElement[];
  playTypeSound: () => void;
  playEnterSound: () => void;
  removeSound: () => void;
  removeAll: () => void;
};

const typeSound = new Audio("sounds/type.mp3");
const enterSound = new Audio("sounds/line_break.mp3");

const soundStore = create<STORETYPE>((set) => ({
  sound: [],
  playTypeSound: () =>
    set((state) => ({
      sound: [...state.sound, structuredClone(typeSound)],
    })),
  playEnterSound: () =>
    set((state) => ({
      sound: [...state.sound, structuredClone(enterSound)],
    })),
  removeSound: () => set((state) => ({ sound: state.sound.slice(1, state.sound.length) })),
  removeAll: () => set({ sound: [] }),
}));

export default soundStore;
