function GameBoard (tray, currPlayer, isDraw) {
  this.tray = tray
  this.currPlayer = currPlayer
  this.isDraw = isDraw
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
  } else {
    return false
  }
}

let currGame = new GameBoard(['', '', '', '', '', '', '', '', ''], 'X', false)

module.exports = {
  GameBoard,
  currGame
}
