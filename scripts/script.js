// const expandButton = document.querySelector('header button')
// expandButton.addEventListener('click', expand)

// function expand() {
//     document.body.classList.toggle('expand')
// }
// console.log('test G');


// var bodySelect = document.querySelector("body");

// --- TOGGLE BUTTON CLASS ---
// var meerButton = document.querySelector(".toggle");
// var backButton = document.querySelector(".backBtn");

// wanneer er op de 'meer button' word geclickt gaat de functie toggleButton van gang//
// meerButton.addEventListener("click", toggleButton);
// backButton.addEventListener("click", gobackButton);

function turn() {
  var element = document.getElementById("card");
  element.classList.toggle('turned');
}

// function gobackButton() {
//     console.log('klikt op toggle gegevens button')
//     bodySelect.classList.remove('showCard');
// }