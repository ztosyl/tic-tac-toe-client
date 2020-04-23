// const getFormFields = require('../../../lib/get-form-fields')
const func = require('./functions')
const api = require('./api')
const ui = require('./ui')

const addLetter = function (event) {
  $('.message').text('')
  const game = func.currGame
  if ($(event.target).text() === '') {
    $(event.target).text(game.currPlayer)
    func.currGame.tray[$(event.target).data('id')] = game.currPlayer
    const over = game.isOver()
    // api.update($(event.target).data('id'), game.currPlayer, over)
    //   .then(ui.updateSuccess)
    //   .catch(ui.updateFailure)
    if (over) {
      if (game.isDraw) {
        $('.who-won').text('You tied!')
      } else {
        $('.who-won').text(`Player ${game.currPlayer} won!`)
      }
    } else if (game.currPlayer === 'X') {
      game.currPlayer = 'O'
    } else {
      game.currPlayer = 'X'
    }
  }
}

const restartGame = function (event) {
  func.currGame = new func.GameBoard(['', '', '', '', '', '', '', '', ''], 'X', false)
  $('.col-4').text('')
  $('.who-won').text('')
  event.preventDefault()
  api.create()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

module.exports = {
  addLetter,
  restartGame
}
