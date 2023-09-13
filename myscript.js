let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.match("ain");
document.getElementById('demo').innerHTML = myArr.length + " " + myArr;
