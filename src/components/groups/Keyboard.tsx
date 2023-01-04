import { ThreeEvent } from "@react-three/fiber";
import { useState } from "react";

import { Key } from "../models";
import { CHAR_TYPE, KEY_TYPE } from "../../types";
import { soundStore, paperStore, animStore } from "../../stores";
import { KEY_LIST, KEY_MAP } from "../../constants";

type CAPS_AVAILABLE = "OFF" | "ONCE" | "LOCK";

type ACTION_MAP_TYPE = {
  FUNCTION: { [key: string]: () => true };
  CHAR: undefined;
  SPECIAL: undefined;
};

const Keyboard = () => {
  //constant options
  const KEYSPACE = 5 + 2;
  const KEYHEIGHT = 2;

  //stores
  const { playTypeSound, playEnterSound } = soundStore();
  const { line, setLine, addLine, removeChar } = paperStore();

  //states
  //   const [lang, setLang] = useState<"EN" | "KO">("EN"); // not implemented yet
  const [caps, setCaps] = useState<CAPS_AVAILABLE>("OFF");
  const [lineWidth, setLineWidth] = useState(0);
  const [font, setFont] = useState<CHAR_TYPE>({ value: "", size: 16, bold: false });

  //functions
  const typewrite: (value: string, space?: number) => true = (value, space = 1) => {
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
    if ((font.size <= 8 && change < 0) || (font.size >= 24 && change > 0)) return true;
    console.log(font.size + change);
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
      Bold: () => {
        setFont((font) => ({ ...font, bold: !font.bold }));
        return true;
      },
    },
    CHAR: undefined,
    SPECIAL: undefined,
  };

  const { addAnim } = animStore();

  const capedKeyValue = (el: KEY_TYPE) => el[caps === "OFF" ? "VALUE" : "SHIFT"] ?? el["VALUE"];

  const onClick = (e: ThreeEvent<MouseEvent>, el: KEY_TYPE) => {
    console.log(el, capedKeyValue(el), caps);
    e.stopPropagation();
    playTypeSound();
    addAnim(capedKeyValue(el));
    ACTION_MAP[el.TYPE]?.[el.VALUE]() ?? typewrite(capedKeyValue(el)); // it would show undefined for all character and make default function work
  };

  //keyboard event
  window.onkeydown = (e) => {
    console.log(e);
    if (e.key === "Shift") {
      onClick(e as any, KEY_MAP.Shift);
      return setCaps("LOCK");
    }
  };
  window.onkeyup = (e) => {
    if (e.key === "Shift") return setCaps("OFF");
    if (e.key === "Tab") return onClick(e as any, KEY_MAP.Tab);
    if (e.key === "CapsLock") return onClick(e as any, KEY_MAP.Caps);
    if (e.key === " ") return onClick(e as any, KEY_MAP.Space);
    if (!KEY_MAP[e.key]) return;
    onClick(e as any, KEY_MAP[e.key]);
  };

  return (
    <group key="keys" position={[-4, 8, -15]} scale={0.9}>
      {KEY_LIST.map((line, y) => {
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
};

export default Keyboard;
