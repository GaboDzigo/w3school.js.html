const fruits = ["Apple","Orange","Apple","Mango"];
let position =  fruits.lastIndexOf("Apple") + 1;

document.getElementById('demo').innerHTML = "Apple found in position" + position;