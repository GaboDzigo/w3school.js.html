const points = [40,100,1,5,15,10];
points.sort(function(a,b){return a-b});
document.getElementById('demo').innerHTML = points[0];