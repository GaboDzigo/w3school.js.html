const numbers = [45,4,9,16,25];
let sum = numbers.reduceRight(myFunction);
document.getElementById('demo').innerHTML = "the sum is " + sum;
 
function myFunction(total, value, index, array) {
 return total + value;
}