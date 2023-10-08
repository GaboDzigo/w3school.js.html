const numbers1 = [45,4,9,16,25];
const numbers2 = numbers.map(myFunction);

document.getElementById('demo').innerHTML = numbers2;
 function myFunction(value,index,array) {
  return value *2;
 }