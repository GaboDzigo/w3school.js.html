const numbers = [45,4,9,16,25];
const sum = numbers.reduce(myFunction);

document.getElementById("demo").innerHTML = "The sum is " + sum;

function myFunction(total,value) {
  return total + value;
}
