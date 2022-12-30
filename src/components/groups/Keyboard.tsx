import { ThreeEvent } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { KEYS, KEY_TYPE } from "../../constants";
import { Key } from "../models";
import { CHARACTER } from "../../types";
import { soundStore, paperStore } from "../../stores";

type CAPS_AVAILABLE = "OFF" | "ONCE" | "LOCK";

type ACTION_MAP_TYPE = {
  FUNCTION: { [key: string]: () => true };
  CHAR: undefined;
  SPECIAL: undefined;
};

function Keyboard() {
  //constant options
  const KEYSPACE = 5 + 2;
  const KEYHEIGHT = 2;

  const { playTypeSound, playEnterSound } = soundStore();
  const { line, setLine, addLine, removeChar } = paperStore();

  //states
  //   const [lang, setLang] = useState<"EN" | "KO">("EN"); // not implemented yet
  const [caps, setCaps] = useState<CAPS_AVAILABLE>("ONCE");
  const [lineWidth, setLineWidth] = useState(0);
  const [font, setFont] = useState<CHARACTER>({ value: "", size: 16, bold: false });

  //functions
  const typewrite: (value: string, space?: number) => true = (value, space = 1) => {
    console.log(value);
    caps === "ONCE" && setCaps("OFF");
    setLine({ ...font, value });
    setLineWidth(font.size * space);
    return true;
  };

  const newLine: () => true = () => {
    playEnterSound();
    addLine();

    return true;
  };

  const changeFontSize: (change: number) => true = (change) => {
    if (font.size <= 8 || font.size >= 30) return true;
    setFont((font) => ({ ...font, size: font.size + change }));
    return true;
  };

  const SHIFT_MAP: { [key: string]: CAPS_AVAILABLE } = {
    LOCK: "LOCK",
    ONCE: "OFF",
    OFF: "ONCE",
  };

  const ACTION_MAP: ACTION_MAP_TYPE = {
    FUNCTION: {
      Tab: () => typewrite("    ", 4),
      Caps: () => {
        setCaps(() => {
          if (caps === "LOCK") return "OFF";
          return "LOCK";
        });
        return true;
      },
      Shift: () => {
        setCaps(SHIFT_MAP[caps]);
        return true;
      },
      Up: () => changeFontSize(+2),
      Down: () => changeFontSize(-2),
      Back: () => {
        if (line.length === 0) return true;
        removeChar();
        return true;
      },
      Enter: newLine,
      Space: () => typewrite(" "),
    },
    CHAR: undefined,
    SPECIAL: undefined,
  };

  const onClick = (e: ThreeEvent<MouseEvent>, el: KEY_TYPE) => {
    e.stopPropagation();
    playTypeSound();
    ACTION_MAP[el.TYPE]?.[el.VALUE]() ?? typewrite(capedKeyValue(el)); // it would show undefined for all character and make default function work
  };

  const capedKeyValue = (el: KEY_TYPE) => el[caps === "OFF" ? "VALUE" : "SHIFT"] ?? el["VALUE"];

  return (
    <group key="keys" position={[-4, 8, -15]} scale={0.9}>
      {KEYS.map((line, y) => {
        return (
          <group position={[-line.length * 3, -y * KEYHEIGHT, y * KEYSPACE]} key={`line-${y}`}>
            {line.map((el, x) => {
              return <Key key={`${x}-${el["VALUE"]}`} text={capedKeyValue(el)} position={[x * KEYSPACE, 0, 0]} onClick={(e) => onClick(e, el)} />;
            })}
          </group>
        );
      })}
    </group>
  );
}

export default Keyboard;
