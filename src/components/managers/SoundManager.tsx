import { soundStore } from "../../stores";

const SoundManager = () => {
  const { sound, removeSound } = soundStore();

  setInterval(() => {
    sound.map((item) => {
      item.ended ? removeSound() : item.play();
    });
  }, 50);

  return <></>;
};

export default SoundManager;
