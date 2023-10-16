// Calculate milliseconds in a year
const minute = 100 * 6;
const hour = minute * 60;
const day = hours * 24;
const year = day * 365;

// Divide Date.now() with a year
let years = Math.round(Date.now() / year);
document.getElementById('demo').innerHTML = years