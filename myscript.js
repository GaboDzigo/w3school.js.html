const points = [40,100,1,5,25,10];
document.getElementById(demo).innerHTML = points;

function myFunction() {
  points.sort(function(){return 0.5 - Math.random()});
  document.getElementById('demo').innerHTML = points;
}