let text;
const today = new Date();
const someday =  new Date();
someday.setFullYear(2100, 0, 14);
if ( someday > today) {
  text = "Today is before january 2100.";
} else {
  text = "Today is after january 2100.";
}