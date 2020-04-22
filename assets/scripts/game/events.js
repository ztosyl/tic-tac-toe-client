const getFormFields = require('../../../lib/get-form-fields')
const func = require('./functions')
const api = ('./api')
const ui = ('./ui')

const addLetter = function (event) {
  const game = func.currGame
  if ($(event.target).text() === '') {
    $(event.target).text(game.currPlayer)
    func.currGame.tray[$(event.target).data('id')] = game.currPlayer
    if (game.whoWon() !== null) {
      $('.who-won').text(`Player ${game.currPlayer} won!`)
    } else if (game.currPlayer === 'X') {
      game.currPlayer = 'O'
    } else {
      game.currPlayer = 'X'
    }
  }
}

const restartGame = function () {
  func.currGame = new func.GameBoard(['', '', '', '', '', '', '', '', ''], 'X')
  $('.col-4').text('')
  $('.who-won').text('')
}

module.exports = {
  addLetter,
  restartGame
}
