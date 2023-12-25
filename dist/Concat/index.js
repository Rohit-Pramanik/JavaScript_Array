import PromptSync from "prompt-sync";
import DummyData from "../DummyData/index.js";
const ProgrammingLanguage = ["JavaScript", "Python", "Java"];
const ProgrammingLanguage2 = ["C", "C++"];
const randomList = [1, 2, 3];
const randomNestedList = [
  [4, 5],
  [6, 7],
  [1, 3],
];
const nestedArray = [1, 2, [3, 4, [5, 6, [7, 8]]]];
const level1 = () => {
  return ProgrammingLanguage.concat(ProgrammingLanguage2);
};
const level2 = () => {
  return randomList.concat(...randomNestedList);
};
const level3 = () => {
  return randomList.concat(...nestedArray.flat(2));
};
const level4 = () => {
  return nestedArray.concat(randomList).flat(5);
};
const level5 = () => {
  return nestedArray.concat(randomList);
};
const level6 = () => {
  return nestedArray[2][2].concat(randomList[2]);
};
const level7 = () => {
  return nestedArray.concat(DummyData.DummyData[1].price);
};
const level8 = () => {
  return DummyData.DummyData.concat(nestedArray[2][2])[12];
};
const level9 = () => {
  return ProgrammingLanguage.concat([
    DummyData.DummyData.concat(nestedArray[2][2][2])[1].title,
  ]);
};
const level10 = () => {
  const prompt = PromptSync();
  const promptArray = prompt("Give any array :- ");
  try {
    const arrayData = JSON.parse(promptArray);
    console.log({ data: typeof arrayData, arrayData });
    return randomList.concat(arrayData);
  } catch (error) {
    return "Array was not correct";
  }
};
export const getConcatExample = () => {
  return [
    level1(),
    level2(),
    level3(),
    level4(),
    level5(),
    level6(),
    level7(),
    level8(),
    level9(),
    level10(),
  ];
};
//# sourceMappingURL=index.js.map
