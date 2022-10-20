// 1.
let newWindow = window.open("", "", "width=300, height=300");
setTimeout(function () {
  newWindow.resizeTo(500, 500);
}, 2000)
setTimeout(function () {
  newWindow.moveTo(200, 200);
}, 4000)
setTimeout(function () {
  newWindow.close();
}, 6000)

// 2.
function changeCSS() {
  document.getElementById("text").style.color = "orange";
  document.getElementById("text").style.fontSize = "20px";
  document.getElementById("text").style.fontFamily = "Comic Sans MS";
};

// 3.
function functionClick() {
  document.body.style.backgroundColor = "blue";
};
function doubleClick() {
  document.body.style.backgroundColor = "pink";
};
function mouseDown() {
  document.body.style.backgroundColor = "brown";
};
function mouseUp() {
  document.body.style.backgroundColor = "white";
};
function changeColor() {
  document.body.style.backgroundColor = "yellow";
};
function normalColor() {
  document.body.style.backgroundColor = "white";
};

// 4.
function deleteItem() {
  var x = document.getElementById("firstname");
  x.remove(x.selectedIndex);
};

// 5.
function mouseClick() {

  printHistory("I was pressed!");
};
function mouseOver() {
  printHistory("Mouse on me!");
};
function mouseOut() {
  printHistory("Mouse is not on me!");
};
function printHistory(text) {
  let history = document.createElement('p');
  history.innerText = text;
  document.getElementById("live").prepend(history);
}

// 6.
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}
window.onresize = reportWindowSize;
window.addEventListener('resize', reportWindowSize);


// 7.
let citiesByCountry = {
  usa: ["New York", "Los Angeles", "San Francisco", "San Diego", "Chicago"],
  ger: ["Berlin", "Frankfurt am Main", "Munich ", "Hesse", "Essen", "Leipzig"],
  ukr: ["Rivne", "Lviv", "Kyiv", "Luck", "Odessa", "Ternopil"]
};

function onCountryChanged() {
  document.getElementById("cities").innerHTML = "";
  let country = document.getElementById("country").value;
  let cities = citiesByCountry[country];
  for (let i = 0; i < cities.length; i++) {
    let option = document.createElement("option");
    option.innerText = cities[i];
    // option.attributes.setNamedItem("value", cities[i]);
    document.getElementById("cities").append(option);
    onCityChanged()
  }
}
onCountryChanged();

function onCityChanged() {
  let countryEl = document.getElementById("country");
  let country = countryEl.options[countryEl.selectedIndex].text;
  let city = document.getElementById("cities").value;
  document.getElementById("selectedCity").innerText = country + ": " + city;
};
