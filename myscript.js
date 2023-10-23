const cars = ["BMW","Volvo","Saab","Ford"];

let i = 0;
let len = cars.length;
let text = "";

for (; i < len; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;