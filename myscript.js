const fruits =v["Banana","Orange","Apple","Mango"];
document.getElementById('demo').innerHTML = fruits;
fruits.unshift("melon");
document.getElementById('demo').innerHTML = fruits;