/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */



function doubler(arr) {
  return arr.map((num) => num * 2);
}

function mapCap(arr) {
  return arr.map((str) => str.toUpperCase());
}

function canRideTheRide(riders) {
  return riders.map((rider) => {
    if (rider.age >= 17) {
      return `${rider.name} can ride the ride`;
    } else {
      return `Sorry, ${rider.name} cannot ride the ride`;
    }
  });
}

function indAndVal(arr) {
  return arr.map((value, index) => ({ index, value }));
}

function filterEvens(arr) {
  return arr.filter((num) => num % 2 === 0);
}


function gmailSearch(emails) {
  return emails.filter((email) => email.includes("@gmail.com"));
}


function getCart(arr) {
  const cartTotal = arr
    .filter((item) => item.price < 100)
    .reduce((total, item) => total + item.price, 0);
  return cartTotal;
}

function findGreater(cart) {
  return cart.find((item) => item.price > 100);
}

module.exports = {
  doubler,
  mapCap,
  canRideTheRide,
  indAndVal,
  filterEvens,
  gmailSearch,
  getCart,
  findGreater,
};
