const points = [40,100,1,5,25,10];
document.getElementById('demo').innerHTML = myArraymin(points);

function myArraymin() {
  return  Math.min.apply(null,arr);
}
