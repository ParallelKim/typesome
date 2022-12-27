type KEY = {
  TYPE: "FUNCTION" | "SPECIAL" | "CHAR";
  VALUE: string;
  SHIFT: string;
};

const KEYS: KEY = [];

export default KEYS;

// 1st Draft
// const KEYS = {
//   FUNCTION: { LEFT: [["Tab"], ["CapsLock"], ["Shift"]], RIGHT: [["Back"], ["ENTER"], ["SHIFT"]] },
//   SPEACIAL: {
//     NORMAL: [
//       ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
//       ["[", "]", "₩"],
//       [";", "'"],
//       [",", ".", "/"],
//     ],
//     SHIFT: [
//       ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"],
//       ["{", "}", "|"],
//       [":", '"'],
//       ["<", ">", "?"],
//     ],
//   },
//   EN: {
//     NORMAL: [
//       ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
//       ["a", "s", "d", "f", "g", "h", "j", "j", "k", "l"],
//       ["z", "x", "c", "v", "b", "n", "m"],
//     ],
//     SHIFT: [
//       ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
//       ["A", "S", "D", "F", "G", "H", "J", "J", "K", "L"],
//       ["Z", "X", "C", "V", "B", "N", "M"],
//     ],
//   },
//   KO: {
//     NORMAL: [
//       ["ㅂ", "ㅈ", "ㄷ", "ㄱ", "ㅅ", "ㅛ", "ㅕ", "ㅑ", "ㅐ", "ㅔ"],
//       ["ㅁ", "ㄴ", "ㅇ", "ㄹ", "ㅎ", "ㅗ", "ㅓ", "ㅏ", "ㅣ"],
//       ["ㅋ", "ㅌ", "ㅊ", "ㅍ", "ㅠ", "ㅜ", "ㅡ"],
//     ],
//     SHIFT: [
//       ["ㅃ", "ㅉ", "ㄸ", "ㄲ", "ㅆ", "ㅛ", "ㅕ", "ㅑ", "ㅒ", "ㅖ"],
//       ["ㅁ", "ㄴ", "ㅇ", "ㄹ", "ㅎ", "ㅗ", "ㅓ", "ㅏ", "ㅣ"],
//       ["ㅋ", "ㅌ", "ㅊ", "ㅍ", "ㅠ", "ㅜ", "ㅡ"],
//     ],
//   },
// };

// 2nd Draft
// const KEYS: KEY[][] = [
//   [
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "`", SHIFT: "~" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "1", SHIFT: "!" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "2", SHIFT: "@" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "3", SHIFT: "#" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "4", SHIFT: "$" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "5", SHIFT: "%" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "6", SHIFT: "^" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "7", SHIFT: "&" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "8", SHIFT: "*" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "9", SHIFT: "(" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "0", SHIFT: ")" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "-", SHIFT: "_" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "=", SHIFT: "+" } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Back", SHIFT: "Back" } },
//   ],
//   [
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Tab" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅂ", SHIFT: "ㅃ" }, EN: { DEFAULT: "q", SHIFT: "Q" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅈ", SHIFT: "ㅉ" }, EN: { DEFAULT: "w", SHIFT: "W" } },
//     { type: "CHAR", KO: { DEFAULT: "ㄷ", SHIFT: "ㄸ" }, EN: { DEFAULT: "e", SHIFT: "E" } },
//     { type: "CHAR", KO: { DEFAULT: "ㄱ", SHIFT: "ㄲ" }, EN: { DEFAULT: "r", SHIFT: "R" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅅ", SHIFT: "ㅆ" }, EN: { DEFAULT: "t", SHIFT: "T" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅛ" }, EN: { DEFAULT: "y", SHIFT: "Y" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅕ" }, EN: { DEFAULT: "u", SHIFT: "U" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅑ" }, EN: { DEFAULT: "i", SHIFT: "I" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅐ", SHIFT: "ㅒ" }, EN: { DEFAULT: "o", SHIFT: "O" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅔ", SHIFT: "ㅖ" }, EN: { DEFAULT: "p", SHIFT: "P" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "[", SHIFT: "{" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "]", SHIFT: "}" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "\\", SHIFT: "|" } },
//   ],
//   [
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Caps" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅁ" }, EN: { DEFAULT: "a", SHIFT: "A" } },
//     { type: "CHAR", KO: { DEFAULT: "ㄴ" }, EN: { DEFAULT: "s", SHIFT: "S" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅇ" }, EN: { DEFAULT: "d", SHIFT: "D" } },
//     { type: "CHAR", KO: { DEFAULT: "ㄹ" }, EN: { DEFAULT: "f", SHIFT: "F" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅎ" }, EN: { DEFAULT: "g", SHIFT: "G" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅗ" }, EN: { DEFAULT: "h", SHIFT: "H" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅓ" }, EN: { DEFAULT: "j", SHIFT: "J" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅏ" }, EN: { DEFAULT: "k", SHIFT: "K" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅣ" }, EN: { DEFAULT: "l", SHIFT: "L" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: ";", SHIFT: ":" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "'", SHIFT: '"' } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Enter" } },
//   ],
//   [
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Shift" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅋ" }, EN: { DEFAULT: "z", SHIFT: "Z" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅌ" }, EN: { DEFAULT: "x", SHIFT: "X" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅊ" }, EN: { DEFAULT: "c", SHIFT: "C" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅍ" }, EN: { DEFAULT: "v", SHIFT: "V" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅠ" }, EN: { DEFAULT: "b", SHIFT: "B" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅜ" }, EN: { DEFAULT: "n", SHIFT: "N" } },
//     { type: "CHAR", KO: { DEFAULT: "ㅡ" }, EN: { DEFAULT: "m", SHIFT: "M" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: ",", SHIFT: "<" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: ".", SHIFT: ">" } },
//     { type: "SPECIAL", SPECIAL: { DEFAULT: "/", SHIFT: "?" } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Shift" } },
//   ],
//   [
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Up" } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Down" } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Space" } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Lang" } },
//     { type: "FUNCTION", FUNCTION: { DEFAULT: "Bold" } },
//   ],
// ];
