// let test = true
//
// console.log(test)
let randomNumber = Math.floor(Math.random()*100+1)
console.log(randomNumber)

var numGuesses = 0


function compare() {
  let guess = document.getElementById("number").value

  if (guess > randomNumber) {
    document.getElementById('closeness').innerHTML = `Your number: ${document.getElementById("number").value} is greater than our number.`
    numGuesses ++
    document.getElementById('tries').innerHTML = `<h2>Number of tries: ${numGuesses}</h2>`
  }else if (guess < randomNumber) {
    document.getElementById('closeness').innerHTML = `Your number: ${document.getElementById("number").value} is less than our number.`
    numGuesses ++
    document.getElementById('tries').innerHTML = `<h2>Number of tries: ${numGuesses}</h2>`
  } else {
    document.getElementById('closeness').innerHTML = `You got it!`
}

}
