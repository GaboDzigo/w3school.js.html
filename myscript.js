const fruits = ["Banana","Orange","Apple","Mango"];
document.getElementById('demo').innerHTML = "Original Array:<br> "  + fruits;
let removed = fruits.splice(2, 2, "Lemon","Kiwi");
document.getElementById('demo').innerHTML = "New Array:<br> "  + fruits;
document.getElementById('demo').innerHTML = "Removed Items:<br> "  + removed;