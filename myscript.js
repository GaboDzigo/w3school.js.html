let text;
switch (new Date().getHours()) {
  case 6 :
    text = "Today is Saturday";
    break;

    case 0 :
      text = "Today is Sunday";
      break;
      default :
      text = "Looking forward to the weekend"
}

document.getElementById("demo").innerHTML = text;
