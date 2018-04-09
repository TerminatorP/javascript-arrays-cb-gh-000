const chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

function addElementToBeginningOfArray(arr, el) {
  let outputArr = arr;
  return outputArr.unshift(el);
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
  return arr;
}
function addElementToEndOfArray(arr, el) {
  let outputArr = arr;
  outputArr.push(el);
  return outputArr;
}
function destructivelyAddElementToEndOfArray(arr, el) {
  arr.push(el);
  return arr;
}
function accessElementInArray(arr, i) {
  return arr[i];
}
