var sad = document.querySelector('.sad');
var medium = document.querySelector('.medium');
var happy = document.querySelector('.happy');
var section = document.querySelector('section');

var sadQuotes = ["Just Do It! -Nike", "The Way Get Started Is To Quit Talking And Begin Doing. – Walt Disney"];
var mediumQuotes = ["Make your life a masterpiece; imagine no limitations on what you can be, have, or do - Brian Tracy",
"Imagine Your Life Is Perfect In Every Respect; What Would It Look Like? - Brian Tracy "];
var happyQuotes = ["You can, and you will.", "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You. – Steve Jobs"];

sad.addEventListener('click', sadGenerator);
medium.addEventListener('click', mediumGenerator);
happy.addEventListener('click', happyGenerator);

function sadGenerator(){
  var num = Math.random() * 2;
  var numRound = Math.floor(num);
  var quote = sadQuotes[numRound];
  section.innerText = quote;
}

function mediumGenerator(){
  var num = Math.random() * 2;
  var numRound = Math.floor(num);
  var quote = mediumQuotes[numRound];
  section.innerText = quote;

}

function happyGenerator(){
  var num = Math.random() * 2;
  var numRound = Math.floor(num);
  var quote = happyQuotes[numRound];
  section.innerText = quote;
}
