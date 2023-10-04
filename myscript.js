 const points = [40,100,1,5,25,10];
document.getElementById('demo1').innerHTML = points

points.sort(function(a,b){return b - a});
document.getElementById('demo2').innerHTML = points;