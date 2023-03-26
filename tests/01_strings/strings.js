/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  return str.includes(letter);
}

function cap(str, letter) {
  const index = str.indexOf(letter.toLowerCase());
  if (index === -1 || index === str.length - 1) {
    return "sorry not found";
  }
  const nextLetter = str[index + 1];
  return nextLetter.toUpperCase();
}

function firstCharacter(str1, str2) {
  const strOne = str1[0];
  const strTwo = str2[0];
  // Nice job! this should work without the if statement. the lowecase will handle all scenarios.
  return strOne.toLowerCase() === strTwo.toLowerCase() || strOne === strTwo;
}

module.exports = {
  cap,
  firstCharacter,
  doesInclude,
};
