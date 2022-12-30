import { useEffect, useRef } from "react";
import create from "zustand";

type STORETYPE = {
  sound: (Element | JSX.Element)[];
  playTypeSound: () => void;
  playEnterSound: () => void;
  removeSound: () => void;
  removeAll: () => void;
};

const Player = (src: string) => {
  const audioElement = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioElement.current?.addEventListener("ended", function () {
      audioElement.current?.parentNode?.removeChild(audioElement.current);
    });
  }, []);

  return <audio ref={audioElement} src={src} autoPlay preload="auto"></audio>;
};

const soundStore = create<STORETYPE>((set) => ({
  sound: [],
  playTypeSound: () =>
    set((state) => ({
      sound: [...state.sound, Player("sounds/type.mp3")],
    })),
  playEnterSound: () =>
    set((state) => ({
      sound: [...state.sound, Player("sounds/line_break.mp3")],
    })),
  removeSound: () => set((state) => ({ sound: state.sound.slice(1, state.sound.length) })),
  removeAll: () => set({ sound: [] }),
}));

export default soundStore;
