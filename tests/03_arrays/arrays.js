/* eslint-disable no-unused-vars */


function multiply(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      total *= multiply(arr[i]);
    } else {
      total *= arr[i];
    }
  }
  return total;
}

function includesCopy(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      return true;
    }
  }
  return false;
}

function inventory(arr) {
  return arr.map(item => {
    const description = `The ${item[1][0]} ${item[0]} is ${item[1][1]} dollars.`;
    return description;
  });
}



function camelCase(str) {
  let words = str.split(/\W+/);
  let camelCaseWords = words.map(function (word, index) {
    if (index === 0) {
     
      return word.toLowerCase();
    } else {
      
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });
  return camelCaseWords.join(""); 
}

function joiner(arr, separator = ",") {
  return arr.join(separator);
}

module.exports = {
  multiply,
  includesCopy,
  inventory,
  camelCase,
  joiner,
};
