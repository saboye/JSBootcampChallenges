/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
    if(num === 0) {
        return 1;
    }else {
        return num * factorial(num - 1);
    }
}

function stringReverse(str) {
    let newStr = '';
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;

}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {
    let newStr = '';
    for(let i = startIdx; i < endIdx; i++) {
        newStr += originalString[i];
    }
    return newStr;

}

function addTheEvens(num) {
    let sum = 0;
    for(let i = 0; i <= num; i++) {
        if(i % 2 === 0) {
            sum += i;
        }
    }
    return sum;

}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
