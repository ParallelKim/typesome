import create from "zustand";

type STORETYPE = {
  sound: HTMLAudioElement[];
  playTypeSound: () => void;
  playEnterSound: () => void;
  removeSound: () => void;
  removeAll: () => void;
};

const soundStore = create<STORETYPE>((set) => ({
  sound: [],
  playTypeSound: () =>
    set((state) => ({
      sound: [...state.sound, new Audio("sounds/type.mp3")],
    })),
  playEnterSound: () =>
    set((state) => ({
      sound: [...state.sound, new Audio("sounds/line_break.mp3")],
    })),
  removeSound: () => set((state) => ({ sound: state.sound.slice(1, state.sound.length) })),
  removeAll: () => set({ sound: [] }),
}));

export default soundStore;
