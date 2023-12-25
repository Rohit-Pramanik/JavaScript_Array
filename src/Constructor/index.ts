import DummyData from "../DummyData/index.js";

let array = [1, 2.3, 4];
let nestedArray = [1, 2, [3, 4, [5, 6, [7, 8]]]];

const level1 = () => {
  let constructor = array.constructor;
  return constructor(DummyData)[1];
};

const level2 = () => {
  let constructor = DummyData.constructor;
  return constructor(nestedArray)[0];
};

export const getConstructorExample = () => {
  return [
    level1(),
    level2(),
    // level3(),
    // level4(),
    // level5(),
    // level6(),
    // level7(),
    // level8(),
    // level9(),
  ];
};
