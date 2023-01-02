import { Text } from "@react-three/drei";

type PROP = {
  position: [number, number, number];
  scale: number;
  size: number;
  value: string;
};

const DefaultText = ({ position = [0, 0, 0], scale = 1, size, value }: PROP) => {
  return (
    <Text position={position} scale={[scale, scale, scale]} color={"black"} anchorX="center" anchorY="bottom" fontSize={size}>
      {value}
    </Text>
  );
};

export default DefaultText;
