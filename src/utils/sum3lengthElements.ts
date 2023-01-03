import { PSEUDO_VECTOR3 } from "../types";

const sum3lengthArray: (array1: PSEUDO_VECTOR3, array2: PSEUDO_VECTOR3) => PSEUDO_VECTOR3 = (array1: PSEUDO_VECTOR3, array2: PSEUDO_VECTOR3) =>
  array1.map((num, index) => num + array2[index]) as PSEUDO_VECTOR3;

export default sum3lengthArray;
