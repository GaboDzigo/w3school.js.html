const points =  [40,100,1,5,25,10];
document.getElementById('demo').innerHTML = points;

points.sort(function(a, b){return a - b});
document.getElementById('demo2').innerHTML = points;