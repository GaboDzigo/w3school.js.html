const numbers = [4,9,16,25,29];
const first = numbers.find(myFunction);

document.getElementById('demo').innerHTML = "First number over 18 is " + first;

function myFunction(value, index, array) {
  return value > 18;
}