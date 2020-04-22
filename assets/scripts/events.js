function GameBoard (tray, currPlayer) {
  this.tray = tray
  this.currPlayer = currPlayer
}

GameBoard.prototype.whoWon = function () {
  if (this.tray[0] !== '' && this.tray[0] === this.tray[1] && this.tray[0] === this.tray[2]) {
    return this.tray[0]
  } else if (this.tray[3] !== '' && this.tray[3] === this.tray[4] && this.tray[3] === this.tray[5]) {
    return this.tray[3]
  } else if (this.tray[6] !== '' && this.tray[6] === this.tray[7] && this.tray[6] === this.tray[8]) {
    return this.tray[6]
  } else if (this.tray[0] !== '' && this.tray[0] === this.tray[3] && this.tray[0] === this.tray[6]) {
    return this.tray[0]
  } else if (this.tray[1] !== '' && this.tray[1] === this.tray[4] && this.tray[1] === this.tray[7]) {
    return this.tray[1]
  } else if (this.tray[2] !== '' && this.tray[2] === this.tray[5] && this.tray[2] === this.tray[8]) {
    return this.tray[2]
  } else if (this.tray[0] !== '' && this.tray[0] === this.tray[4] && this.tray[0] === this.tray[8]) {
    return this.tray[0]
  } else if (this.tray[2] !== '' && this.tray[2] === this.tray[4] && this.tray[2] === this.tray[6]) {
    return this.tray[2]
  } else {
    return null
  }
}

let currGame = new GameBoard(['', '', '', '', '', '', '', '', ''], 'X')

const ifWin = function () {
  $('.who-won').text(`Player ${currGame.currPlayer} won!`)
}

const restartGame = function () {
  currGame = new GameBoard(['', '', '', '', '', '', '', '', ''], 'X')
  $('.col-4').text('')
  $('.who-won').text('')
}

const addLetter = function (event) {
  if ($(event.target).text() === '') {
    $(event.target).text(currGame.currPlayer)
    currGame.tray[$(event.target).data('id')] = currGame.currPlayer
    if (currGame.whoWon() !== null) {
      ifWin()
    } else if (currGame.currPlayer === 'X') {
      currGame.currPlayer = 'O'
    } else {
      currGame.currPlayer = 'X'
    }
  }
}

module.exports = {
  addLetter,
  GameBoard,
  currGame,
  restartGame
}
