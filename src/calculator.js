import React from "react";
function add(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mult(num1, num2) {
  return num1 * num2;
}
function div(num1, num2) {
  var res = "";
  if (num1 > num2) {
    res = num1 / num2;
  } else {
    res = num2 / num1;
  }
  return res;
}

export { add, sub, mult, div };
