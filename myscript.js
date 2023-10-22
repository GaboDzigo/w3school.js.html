const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good Morning";
} else if (time < 20) {
  greeting = "Good Day";
} else  {
  greeting = "Good Evening";
}

document.getElementById("demo").innerHTML = greeting;