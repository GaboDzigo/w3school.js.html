let x = 6;
let y = 3;

document.getElementById("demo").innerHTML = 
(x == 5 || y == 5 ) +  "<br>"  +
(x == 6 || y == 0 ) +  "<br>"  +
(x == 0 || y == 3 ) +  "<br>"  +
(x == 6 || y == 3 );