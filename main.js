
let randomNumber = Math.floor(Math.random()*100)
console.log(randomNumber)
let numGuesses = 0;



function compare() {
  let guess = document.getElementById("number").value
  let gap = Math.abs(guess - randomNumber)


  if (gap > 50) {
    document.getElementById('closeness').innerHTML = `Your number: ${document.getElementById("number").value} is feeling freezing cold.`
    numGuesses ++
    document.getElementById('tries').innerHTML = `<h2>Number of tries: ${numGuesses}</h2>`
  }else if (gap > 20) {
    document.getElementById('closeness').innerHTML = `Your number: ${document.getElementById("number").value} is feeling cold.`
    numGuesses ++
    document.getElementById('tries').innerHTML = `<h2>Number of tries: ${numGuesses}</h2>`
  }else if (gap > 10) {
    document.getElementById('closeness').innerHTML = `Your number: ${document.getElementById("number").value} is feeling warm.`
    numGuesses ++
    document.getElementById('tries').innerHTML = `<h2>Number of tries: ${numGuesses}</h2>`
  }else if (gap > 5) {
    document.getElementById('closeness').innerHTML = `Your number: ${document.getElementById("number").value} is feeling hot.`
    numGuesses ++
    document.getElementById('tries').innerHTML = `<h2>Number of tries: ${numGuesses}</h2>`
  }else if (gap >= 1) {
    document.getElementById('closeness').innerHTML = `Your number: ${document.getElementById("number").value} is feeling BOILING.`
    numGuesses ++
    document.getElementById('tries').innerHTML = `<h2>Number of tries: ${numGuesses}</h2>`
  }else {
    document.getElementById('closeness').innerHTML = `You got it!`
  }

}

function resetGame(){
  randomNumber = Math.floor(Math.random()*100)
  document.getElementById('closeness').innerHTML = `Good Luck`

  numGuesses = 0
  document.getElementById('tries').innerHTML = `<h2>Number of tries: ${numGuesses}</h2>`

  console.log(randomNumber)
}
