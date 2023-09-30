const fruits = ["Banana","Orange","Apple","Mango"];

document.getElementById('demo1').innerHTML = 
"The First fruit is : " + fruits[0];

delete fruits[0];

document.getElementById('demo2').innerHTML = 
"The First fruit is : " + fruits[0];