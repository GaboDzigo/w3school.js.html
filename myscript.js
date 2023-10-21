function myFunction() {
let voteable;
let age = Number(document.getElementById("age").value);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young to vote" : "Old enough to vote"
}
document.getElementById("demo").innerHTML = voteable + "to vote";
}


