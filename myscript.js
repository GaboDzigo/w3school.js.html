const numbers = [45,4,9,16,25];
const someOver18 =  numbers.some(myFunction);

document.getElementById('demo').innerHTML = "Some is over 18 " + someOver18;

function myFunction(value, index,array) {
  return value > 18;
}