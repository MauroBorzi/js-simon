// recupero gli elemneti che mi servono
const countdown = document.getElementById(`countdown`)
const numbersList = document.getElementById(`numbers-list`)
const answersForm = document.getElementById(`answers-form`)
const instructions = document.getElementById(`instructions`)

// definisco una variabile che mi conta i secondi
let seconds = 5

// definisco il mio intervallo
const intervalId = setInterval(function () {

  if (seconds === 0) {
    clearInterval(intervalId)
    answersForm.classList.remove(`d-none`)
    countdown.classList.add(`d-none`)
    numbersList.classList.add(`d-none`)
    instructions.innerText = `Inserisci i numeri memorizzati! (In qualsiasi ordine)`
  }
  else {
    countdown.innerText = seconds
  }

  seconds--

}, 1000)

// funzione per generale i numeri casuali
function randomNumber() {
  for (let i = 0; i < 5; i++) {
    const randomNumbers = Math.floor(Math.random() * 50) + 1
    const listNumber = document.createElement("li")
    listNumber.textContent = randomNumbers
    numbersList.appendChild(listNumber)
  }
}

randomNumber();