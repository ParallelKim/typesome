import { paperStore } from "../../stores";

const Paper = () => {
  //constant options
  const HEAD_SPACE = 20;
  const DEFAULT_HEIGHT = 40;

  //stores
  const { line, paper, setLine, addLine, removeChar } = paperStore();

  return (
    <group key="paper" position={[0, 70, -20]}>
      <mesh>
        <boxGeometry args={[100, DEFAULT_HEIGHT, 0.05]} />
      </mesh>
      <group>{paper.map((line, index) => {})}</group>
    </group>
  );
};

export default Paper;
