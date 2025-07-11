// recupero gli elemneti che mi servono
const countdown = document.getElementById(`countdown`)
const numbersList = document.getElementById(`numbers-list`)
const answersForm = document.getElementById(`answers-form`)

// definisco una variabile che mi conta i secondi
let seconds = 5

// definisco il mio intervallo
const intervalId = setInterval(function () {

  if (seconds === 0) {
    clearInterval(intervalId)
    answersForm.classList.remove(`d-none`)
    countdown.classList.add(`d-none`)

  }
  else {
    countdown.innerText = seconds
  }

  seconds--

}, 1000)