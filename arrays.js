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
