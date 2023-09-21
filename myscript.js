let myNumber = 2;
let txt = " ";
while(myNumber != Infinity) {
  myNumber = myNumber * myNumber
  txt = txt + myNumber + "<br>"
}
document.getElementById('demo').innerHTML = txt;