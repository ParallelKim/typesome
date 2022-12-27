import { useState } from "react";
import { SIZE, KEYS } from "../../constants";
import { Key } from "../models";

export const Keyboard = () => {
  //constant option
  const KEYSPACE = SIZE.KEY.SMALL + SIZE.SPACE;
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
              const keyType = el.type;
              var value = "";
              if (keyType === "CHAR") {
                value = el[lang]?.[shift] ?? "";
              } else {
                if (el[keyType]?.SHIFT) {
                  value = el[keyType]?.[shift] ?? "";
                } else {
                  value = el[keyType]?.DEFAULT ?? "";
                }
              }
              return <Key key={value} text={value} position={[x * KEYSPACE, -y * KEYHEIGHT, y * KEYSPACE]} />;
            })}
          </group>
        );
      })}
    </group>
  );
};
