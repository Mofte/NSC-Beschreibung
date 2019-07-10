document.getElementById("neuerNSC").addEventListener("click", newNSC);

function newNSC() {
  var randomGroesse = Math.floor(Math.random() * groesse.length);
  document.getElementById("displayGroesse").innerHTML = groesse[randomGroesse];
  var randomStatur = Math.floor(Math.random() * statur.length);
  document.getElementById("displayStatur").innerHTML = statur[randomStatur];
  var randomHaarfarbe = Math.floor(Math.random() * haarfarbe.length);
  document.getElementById("displayHaarfarbe").innerHTML =
    haarfarbe[randomHaarfarbe];
  var randomHaarlaenge = Math.floor(Math.random() * haarlaenge.length);
  document.getElementById("displayHaarlaenge").innerHTML =
    haarlaenge[randomHaarlaenge];
  var randomHaarform = Math.floor(Math.random() * haarform.length);
  document.getElementById("displayHaarform").innerHTML =
    haarform[randomHaarform];
  var randomBart = Math.floor(Math.random() * bart.length);
  document.getElementById("displayBart").innerHTML = bart[randomBart];
  var randomStirn = Math.floor(Math.random() * stirn.length);
  document.getElementById("displayStirn").innerHTML = stirn[randomStirn];
  var randomAugenfarbe = Math.floor(Math.random() * augenfarbe.length);
  document.getElementById("displayAugenfarbe").innerHTML =
    augenfarbe[randomAugenfarbe];
  var randomNase = Math.floor(Math.random() * nase.length);
  document.getElementById("displayNase").innerHTML = nase[randomNase];
  var randomMundwinkel = Math.floor(Math.random() * mundwinkel.length);
  document.getElementById("displayMundwinkel").innerHTML =
    mundwinkel[randomMundwinkel];
  var randomZaehne = Math.floor(Math.random() * zaehne.length);
  document.getElementById("displayZaehne").innerHTML = zaehne[randomZaehne];
  var randomKinn = Math.floor(Math.random() * kinn.length);
  document.getElementById("displayKinn").innerHTML = kinn[randomKinn];
  var randomHals = Math.floor(Math.random() * hals.length);
  document.getElementById("displayHals").innerHTML = hals[randomHals];
  var randomBesonderes = Math.floor(Math.random() * besonderes.length);
  document.getElementById("displayBesonderes").innerHTML =
    besonderes[randomBesonderes];
}

var groesse = ["klein", "normal", "groß", "riesig"];
var statur = ["muskulös", "schmächtig", "schlank", "übergewichtig"];
var haarfarbe = [
  "weißblond",
  "hellblond",
  "mittelblond",
  "dunkelblond",
  "hellbraun",
  "mittelbraun",
  "dunkelbraun",
  "schwarz",
  "rotblond",
  "rot",
  "grau"
];
var haarlaenge = ["Glatze", "sehr kurz", "kurz", "mittel", "lang", "sehr lang"];
var haarform = ["glatt", "wellig", "lockig", "kraus"];
var bart = [
  "langer Vollbart",
  "Vollbart",
  "14-Tage-Bart",
  "3-Tage-Bart",
  "Stoppeln",
  "keiner",
  "keiner",
  "keiner",
  "keiner",
  "keiner",
  "keiner"
];
var stirn = ["niedrig", "mittel", "hoch"];
var augenfarbe = [
  "hellblau",
  "dunkelblau",
  "grau",
  "graugrün",
  "gelb",
  "hellbraun",
  "dunkelbraun"
];
var nase = ["schmal", "mittel", "breit", "krum"];
var mundwinkel = ["abwärts", "gerade", "aufwärts"];
var zaehne = [
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "Zahnlücken",
  "Zahnlücken",
  "Zahnlücken",
  "Zahnlücken",
  "faulig"
];
var kinn = [
  "schmalrund",
  "breitrund",
  "eckig",
  "Grübchen",
  "Mulde",
  "Doppelkinn"
];
var hals = [
  "muskulös",
  "kurz",
  "lang",
  "zart",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal",
  "normal"
];
var besonderes = [
  "Narben",
  "Verbrennungen",
  "Wunden",
  "Tättowierungen",
  "Piercing",
  "Augenklappe",
  "Glasauge",
  "Schmuck",
  "Schmuck",
  "Schmuck",
  "Schmuck",
  "nix",
  "nix",
  "nix",
  "nix",
  "nix",
  "nix",
  "nix",
  "nix",
  "nix",
  "nix",
  "nix",
  "nix",
  "nix",
  "nix",
  "nix",
  "nix"
];
