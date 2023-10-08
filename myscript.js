const numbers = [45,4,9,16,25]
const over18 = numbers.filter(myFunction);

document.getElementById('demo').innerHTML = over18;

function myFunction(value, index, array) {
  return value > 18;
}