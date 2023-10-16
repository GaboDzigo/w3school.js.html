const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Saturday"]

const d = new Date("2021-03-25");
let day = day[d.getDay()];
document.getElementById('demo').innerHTML = day;