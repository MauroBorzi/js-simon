// recupero gli elemneti che mi servono
const countdown = document.getElementById(`countdown`)
const numbersList = document.getElementById(`numbers-list`)
const answersForm = document.getElementById(`answers-form`)
const instructions = document.getElementById(`instructions`)
const message = document.getElementById(`message`)

// definisco una variabile che mi conta i secondi
let seconds = 10

// definisco il mio intervallo
const intervalId = setInterval(function () {

  if (seconds === 0) {
    clearInterval(intervalId)
    answersForm.classList.remove(`d-none`)
    countdown.classList.add(`d-none`)
    numbersList.classList.add(`d-none`)
    instructions.innerText = `Inserisci i numeri memorizzati(In qualsiasi ordine!)`
  }
  else {
    countdown.innerText = seconds
  }

  seconds--

}, 1000)

let arrayrandom = []

// funzione per generale i numeri casuali
function randomNumber() {
  for (let i = 0; i < 5; i++) {
    const randomNumbers = Math.floor(Math.random() * 50) + 1
    const listNumber = document.createElement("li")
    listNumber.textContent = randomNumbers
    numbersList.appendChild(listNumber)
    arrayrandom.push(randomNumbers)
  }
}

randomNumber();

let selectNumbers = []


// recupero il pulsante
const button = document.querySelector(`.btn`)

// creo l'evento cliccando il pulsante
button.addEventListener(`click`, function (e) {
  e.preventDefault()

  // genero il risultato dei numeri inseriti
  const results = document.querySelectorAll(`.form-control`)
  for (let i = 0; i < results.length; i++) {
    const element = results[i]
    if (element.type === 'number') {
      selectNumbers.push(parseInt(element.value))
    }
  }
  const finalNum = checkUserSelection(selectNumbers, arrayrandom)
  message.textContent = 'Numeri indovinati: ' + finalNum.join(', ')
})

function checkUserSelection(x, y) {
  const result = []
  for (let i = 0; i < x.length; i++) {
    if (y.includes(x[i])) {
      result.push(x[i])
    }
  }
  return result
}








