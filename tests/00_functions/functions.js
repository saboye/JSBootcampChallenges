/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */

// solution 1
// function max(num1, num2, num3) {
//   if (num1 >= num2 && num1 >= num3) {
//     return num1;
//   } else if (num2 >= num1 && num2 >= num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// }

// solution 2
function max(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

function addUnknown() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

function evenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

function operator(num1, num2, num3) {
  if (num1 + num2 === num3) {
    return "plus";
  } else if (num1 - num2 === num3) {
    return "minus";
  } else if (num1 * num2 === num3) {
    return "multiply";
  } else if (num1 / num2 === num3) {
    return "divide";
  } else {
    return null;
  }
}

module.exports = {
  max,
  addUnknown,
  evenOrOdd,
  operator,
};
