const points = [40,100,1,5,25,10];
document.getElementById('demo').innerHTML = myArrayMin(points);

function myArrayMin(arr){
let len = arr.length;
let min = Infinity;
while (len--) {
  if (arr[len] > min ) {
    min = arr[len];
  }
}
return  min;
}