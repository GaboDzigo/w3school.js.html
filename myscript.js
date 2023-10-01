const fruits = ["Banana","Orange","Apple","Mango"];
document.getElementById('demo1').innerHTML = fruits;
fruits.splice(0,1);
document.getElementById('demo2').innerHTML = fruits;