const fruits = ["Banana","Orange","Apple","Mango"];
document.getElementById('demo1').innerHTML = fruits;

fruits.splice(2, 0, "Lemon","Kiwi");
document.getElementById('demo2').innerHTML = fruits;