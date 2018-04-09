var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(arr, el) {
  let newArr = [...arr];
  newArr.unshift(el);
  return newArr;
}
function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}
function addElementToEndOfArray(arr, el) {
  let newArr = [...arr];
  newArr.push(el);
  return newArr;
}
function destructivelyAddElementToEndOfArray(arr, el) {
  arr.push(el);
  return arr;
}
function accessElementInArray(arr, i) {
  return arr[i];
}
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}
function removeElementFromBeginningOfArray(arr) {
  let newArr = [...arr];
  newArr.shift();
  return newArr;
}
function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}
function removeElementFromEndOfArray(arr) {
  let newArr = [...arr];
  newArr.pop();
  return newArr;
}
