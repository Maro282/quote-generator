var quotes = document.querySelectorAll(".quote");
var randomNum = Math.floor(Math.random() * quotes.length);
quotes[randomNum].style.display = "block";
function random() {
  var randomNumCheck = Math.floor(Math.random() * quotes.length);
  while (randomNum === randomNumCheck) {
    randomNumCheck = Math.floor(Math.random() * quotes.length);
  }
  randomNum = randomNumCheck;
  quotes[randomNum].style.display = "block";
  for (let i = 0; i < quotes.length; i++) {
    if (i !== randomNum) quotes[i].style.display = "none";
  }
}
