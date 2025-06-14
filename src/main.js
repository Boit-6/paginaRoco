import { createHeader } from './components/Header.js';

const gemas = 0.0125
const robux = 0.0125
const pavos = 0.009
const dolarToPesos = 1300


function convert(game, amount) {
  if (game === "gemas") {
    return amount * gemas
  } else if (game === "robux") {
    return amount * robux
  } else if (game === "pavos") {
    return amount * pavos
  }
}

function convertArs(game, amount) {
  if (game === "gemas") {
    return amount * (gemas * dolarToPesos)
  } else if (game === "robux") {
    return amount * (robux * dolarToPesos)
  } else if (game === "pavos") {
    return amount * (pavos * dolarToPesos)
  }
}

function convertAndDisplay() {

  const game = document.getElementById("game").value
  const amount = parseFloat(document.getElementById("amount").value)
  const resultElement = document.getElementById("result")
  
  if (isNaN(amount)) {
    resultElement.textContent = "Result: Please enter a valid amount"
    return
  }
  
  const result = convert(game, amount)
  const resultArs = convertArs(game, amount)

  resultElement.textContent = `Dollars: ${amount} ${game} = $${result.toFixed(2)} USD \n Pesos: ${amount} ${game} = $${resultArs.toFixed(2)} ARS`



}

// Add header to the page
document.body.prepend(createHeader());

// Exponer la función al ámbito global
window.convertAndDisplay = convertAndDisplay;

document.getElementById('convertForm').addEventListener('submit', function(e) {
  e.preventDefault();
  convertAndDisplay();
});

