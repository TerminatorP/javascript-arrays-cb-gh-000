var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(arr, el) {
  let newArr = [...arr];
  return newArr.unshift(el);
}
