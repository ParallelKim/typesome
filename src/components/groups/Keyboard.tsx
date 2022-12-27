import { useState } from "react";
import { KEYS } from "../../constants";
import { Key } from "../models";

export const Keyboard = () => {
  //constant option
  const KEYSPACE = 5 + 2;
  const KEYHEIGHT = 2;

  //state
  const [lang, setLang] = useState<"EN" | "KO">("EN");
  const [caps, setCaps] = useState<"OFF" | "ONCE" | "LOCK">("ONCE");
  const shift = caps === "OFF" ? "DEFAULT" : "SHIFT";
  return (
    <group key="keys" position={[-41, 8, -15]} scale={0.9}>
      {KEYS.map((line, y) => {
        return (
          <group key={`line-${y}`}>
            {line.map((el, x) => {
              return <Key key={value} text={value} position={[x * KEYSPACE, -y * KEYHEIGHT, y * KEYSPACE]} />;
            })}
          </group>
        );
      })}
    </group>
  );
};
