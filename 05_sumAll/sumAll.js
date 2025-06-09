const sumAll = function(x,y) {
    let sum = "";
    const z = x + y;
      sum = 0;
  for (let i = x; i <= y; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumAll(0,2));

// Do not edit below this line
module.exports = sumAll;
