var listQuotes = [
  { quote: "Mieux vaut une conscience tranquille qu'une destinée prospère. j'aime mieux un bon sommeil qu'un bon lit.", auteur: "Victor HUGO" },
  { quote: "La vie sans religion est une vie sans principe, et unevie sans principe est comme un bateau sans gouvernail.", auteur: "GANDHI" },
  { quote: "L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde.", auteur: "Nelson MANDELA" },
  { quote: "L'éducation, c'est la famille qui la donne; l'instruction, c'est l'Etat qui la doit.", auteur: "Victor HUGO" },
  { quote: "La victoire obtenue par la violence équivaut à une défaite, car elle est momentanée.", auteur: "GANDHI" },
  { quote: "La liberté commence où l'ignorance finit.", auteur: "Victor HUGO" },
  { quote: "La connaissance des mots conduit à la connaissance des chose.", auteur: "Platon" },
  { quote: "Vous pouvez cacher aux autres une action répréhensible, mais jamais à vous-même.", auteur: "Socrate" },
  { quote: "Lire, c'est boire et manger. L'esprit qui ne lit pas maigrit comme le corps qui ne mange pas.", auteur: "Victor HUGO" },
  { quote: "Vivre joyeusement c'est d'avoir la joie de vivre.", auteur: "AminaRassoul" },
  { quote: "La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", auteur: "GANDHI" }
];

var currentQuote = 0;
var progress = setInterval(timerProgress, 30);
var progressWidth = 0;

function timerProgress() {
  $(".ligne-de-change").width(progressWidth + "%");
  if (progressWidth < 100) {
    progressWidth += 0.1;
  } else {
    changeQuote();
    progressWidth = 0;
  }
}

function setQuote() {
  $(".quote").html('"' + listQuotes[currentQuote].quote + '"');
  $(".nom-auteur").html(listQuotes[currentQuote].auteur);
  tweetQuote();
}

function getRandomQuote() {
  currentQuote = Math.round(Math.random() * (listQuotes.length));
  setQuote();
}

function changeQuote() {
  // $("blockquote").fadeToggle( "slow", "linear" );
  if (currentQuote < listQuotes.length - 1) {
    currentQuote++;
  } else {
    currentQuote = 0;
  }
  setQuote();
}

$(".next").click(function () {
  changeQuote();
  progressWidth = 0;
});

$(".random").click(function () {
  getRandomQuote();
  progressWidth = 0;
});

/* API */
window.quote = (function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.quote || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function (f) {
    t._e.push(f);
  };

  return t;
}(document, "script"));

function tweetQuote() {
  $('#quote-tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quote,inspiration&text='
    + encodeURIComponent('"' + listQuotes[currentQuote].quote + '" ' + listQuotes[currentQuote].author));
}

setQuote();