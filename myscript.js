// Create and display an array:
const fruits = ["Banana","Orange","Apple","Mango"];
document.getElementById('demo1').innerHTML = fruits;

// First sort the array
fruits.sort();

// Then reverse it:
fruits.reverse();

document.getElementById('demo2').innerHTML = fruits;