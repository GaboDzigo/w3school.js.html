const numbers = [45,4,9,16,25];
let sum = numbers.reduce(myFunction, 100);

document.getElementById('demo').innerHTML = "The sum is " + sum;

function myFunction(total, value) {
  return total + value
}