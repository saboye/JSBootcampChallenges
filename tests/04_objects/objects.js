/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */

function deleteProp(obj, prop) {
  const newObj = { ...obj };
  delete newObj[prop];
  return newObj;
}


function numObjectProps(obj) {
  return Object.keys(obj).length;
}


function shoppingCart(cart) {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].amount;
  }
  return sum;
}


function compareObjects(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let i = 0; i < obj1Keys.length; i++) {
    const key = obj1Keys[i];
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  compareObjects,
  deleteProp,
  numObjectProps,
  shoppingCart,
};
