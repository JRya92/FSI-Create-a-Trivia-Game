let userName = window.prompt('Please enter your name:')
let userScore = 0
let playAgain = true
for(let i = 0; i < questions.length; i++) {
    console.log (questions[i])
    window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        userScore = userScore +10
        console.log('Correct')
    }
}
window.alert( 'Your score is: '+userScore)
while (playAgain === true) {
playGame()
let userChoice = window.prompt('Would you like to play the game again? Answer yes or no.')
if(userChoice === 'yes'){
        playAgain = true
} else {
    playAgain = false
    window.alert('Thanks for playing the game!')
    }
}    