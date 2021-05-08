// Connect "Guess" button to "random" function
document.getElementById('button').addEventListener('click', comparison)
let userInput = 0

function comparison () {
  // Get user input and convert to integer
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  // Check if user input is less than 0
  if (userInput < 0) {
    document.getElementById('answer').innerHTML = 'Negative'
  } else {
    document.getElementById('answer').innerHTML = 'Positive'
  }
}
