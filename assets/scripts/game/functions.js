function GameBoard () {
  this.tray = ['', '', '', '', '', '', '', '', '']
  this.currPlayer = 'X'
  this.isDraw = false
  this.magicNumbers = []
  this.isExploderPressed = false
}

GameBoard.prototype.chooseMagicNumbers = function () {
  this.magicNumbers = []
  while (this.magicNumbers.length < 2) {
    const magic = Math.floor(Math.random() * 8)
    if (this.magicNumbers.indexOf(magic) === -1) {
      this.magicNumbers.push(magic)
    }
  }
}

GameBoard.prototype.isOver = function () {
  if (this.tray[0] !== '' && this.tray[0] === this.tray[1] && this.tray[0] === this.tray[2]) {
    return true
  } else if (this.tray[3] !== '' && this.tray[3] === this.tray[4] && this.tray[3] === this.tray[5]) {
    return true
  } else if (this.tray[6] !== '' && this.tray[6] === this.tray[7] && this.tray[6] === this.tray[8]) {
    return true
  } else if (this.tray[0] !== '' && this.tray[0] === this.tray[3] && this.tray[0] === this.tray[6]) {
    return true
  } else if (this.tray[1] !== '' && this.tray[1] === this.tray[4] && this.tray[1] === this.tray[7]) {
    return true
  } else if (this.tray[2] !== '' && this.tray[2] === this.tray[5] && this.tray[2] === this.tray[8]) {
    return true
  } else if (this.tray[0] !== '' && this.tray[0] === this.tray[4] && this.tray[0] === this.tray[8]) {
    return true
  } else if (this.tray[2] !== '' && this.tray[2] === this.tray[4] && this.tray[2] === this.tray[6]) {
    return true
  } else if (this.tray.indexOf('') === -1) {
    this.isDraw = true
    return true
  } else if (this.isExploderPressed === true) {
    return true
  } else {
    return false
  }
}

GameBoard.prototype.switch = function () {
  for (let i = 0; i < this.tray.length; i++) {
    if (this.tray[i] === 'X') {
      this.tray[i] = 'O'
    } else if (this.tray[i] === 'O') {
      this.tray[i] = 'X'
    }
  }
}

const whoWon = function (tray) {
  if (tray.indexOf('A') !== -1) {
    return 'O'
  } else if (tray.indexOf('B') !== -1) {
    return 'X'
  }
  if (tray[0] !== '' && tray[0] === tray[1] && tray[0] === tray[2]) {
    return tray[0]
  } else if (tray[3] !== '' && tray[3] === tray[4] && tray[3] === tray[5]) {
    return tray[3]
  } else if (tray[6] !== '' && tray[6] === tray[7] && tray[6] === tray[8]) {
    return tray[6]
  } else if (tray[0] !== '' && tray[0] === tray[3] && tray[0] === tray[6]) {
    return tray[0]
  } else if (tray[1] !== '' && tray[1] === tray[4] && tray[1] === tray[7]) {
    return tray[1]
  } else if (tray[2] !== '' && tray[2] === tray[5] && tray[2] === tray[8]) {
    return tray[2]
  } else if (tray[0] !== '' && tray[0] === tray[4] && tray[0] === tray[8]) {
    return tray[0]
  } else if (tray[2] !== '' && tray[2] === tray[4] && tray[2] === tray[6]) {
    return tray[2]
  } else {
    return 'tied'
  }
}

const calcStats = function (data) {
  const total = []
  const winsLosses = []
  let xWins = 0
  let xLosses = 0
  for (let i = 0; i < data.games.length; i++) {
    total.push(whoWon(data.games[i].cells))
  }
  for (let i = 0; i < total.length; i++) {
    if (total[i] === 'X') {
      xWins += 1
    } else if (total[i] === 'O') {
      xLosses += 1
    }
  }
  winsLosses[0] = xWins
  winsLosses[1] = xLosses
  return winsLosses
}

let currGame = new GameBoard(['', '', '', '', '', '', '', '', ''], 'X', false)
currGame.chooseMagicNumbers()

module.exports = {
  GameBoard,
  currGame,
  calcStats,
  whoWon
}
