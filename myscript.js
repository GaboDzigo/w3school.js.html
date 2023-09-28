const fruits = ["Banana","Orange","Apple","Mango"];
fruits[6] = "Lemon";

let flen = fruits.length;
let text = "";
for (i = 0; i < flen; i++) {
  text +=fruits[1] + "<br>";
}

document.getElementById('demo').innerHTML = text;