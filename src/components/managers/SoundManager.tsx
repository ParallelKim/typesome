import { useFrame } from "@react-three/fiber";
import { soundStore } from "../../stores";

const SoundManager = () => {
  const { sound, removeSound } = soundStore();

  return <>{sound}</>;
};

export default SoundManager;
