function computerChoice () {
    let choice = ['rock', 'paper', 'scissor']
    let randomChoice = parseInt(Math.random() * 3)
    return choice[randomChoice]
}

function play () {
    let computer = computerChoice()
    let userChoice = prompt('Hi, What do you want to choose : Rock, Paper or Scissor ?')
    if (userChoice === null || userChoice == "") {
        console.log('Dont be Boring ! Type something')
        let userChoice = prompt('Hi, What do you want to choose : Rock, Paper or Scissor ?')
        let v = userCheck(userChoice)
        if (v[0] === true ) {
            rpsLogic(userChoice, computer)
        } else if (v[0] === false) {
            userChoice = prompt(v[1])
            rpsLogic(userChoice, computer)
        }
    } else {
        let v = userCheck(userChoice)
        if (v[0] === true ) {
            rpsLogic(userChoice, computer)
        } else if (v[0] === false) {
            userChoice = prompt(v[1])
            rpsLogic(userChoice, computer)
        }
    }
}

function rpsLogic (userChoice, computer) {
    let u = userChoice.toLowerCase()
    let c = computer
    if (c === u) {
        alert( 'Oh ! Sorry, its a draw')
    } else if (c === 'rock' && u === 'paper') {
        alert( 'Congrats, You Won')
    } else if (c === 'paper' && u === 'scissor') {
        alert( 'Congrats, You Won')
    } else if (c === 'scissor' && u === 'rock') {
        alert( 'Congrats, You Won')
    } else if (u === 'rock' && c === 'paper') {
        alert( 'Oh ! Computer Won')
    } else if (u === 'paper' && c === 'scissor') {
        alert( 'Oh ! Computer Won')
    } else if (u === 'scissor' && c === 'rock') {
        alert( 'Oh ! Computer Won')
    }
}

function userCheck (userChoice) {
    let u = userChoice.toLowerCase()
    if (u[0] === 'r' && u !== 'rock') {
        return [false, 'Did you mean Rock ?', 'rock']
    } else if (u[0] === 'p' && u !== 'paper') {
        return [false, 'Did you mean Paper ?', 'paper']
    } else if (u[0] === 's' && u !== 'scissor') {
        return [false, 'Did you mean Scissor ?', 'scissor']
    } else if(u == 'rock'||u == 'paper'||u == 'scissor'){
        return [true, '']
    }
    else {
        return [false, 'Please give me a valid one (rock,paper or scissor) ?'] 
    }
}

function reldFunction() {
    location.reload();
}

function myPop() {
    document.getElementById("dem").innerHTML = "Rock, Paper, Scissors is a game for two players typically" + "<br>" + "played using the players' hands. The two players each make a fist with one "+ "<br>" + "hand and hold the other open, palm upward.  If scissors and paper are formed, "+ "<br>" +" the scissors win, because scissors can cut paper";
  }