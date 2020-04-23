// const getFormFields = require('../../../lib/get-form-fields')
const func = require('./functions')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const addLetter = function (event) {
  $('.message').text('')
  const game = func.currGame
  const index = $(event.target).data('id')
  if (($(event.target).text() === '') && (store.user !== null) && (store.user !== undefined)) {
    $(event.target).text(game.currPlayer)
    func.currGame.tray[index] = game.currPlayer
    const over = game.isOver()
    console.log(index)
    console.log(game.currPlayer)
    console.log(over)
    api.update(index, game.currPlayer, over)
      .then(ui.updateSuccess)
      .catch(ui.updateFailure)
    if (over) {
      if (game.isDraw) {
        $('.who-won').text('You tied!')
      } else {
        $('.who-won').text(`Player ${game.currPlayer} won!`)
      }
    } else if (game.currPlayer === 'x') {
      game.currPlayer = 'o'
    } else {
      game.currPlayer = 'x'
    }
  }
}

const onCreate = function () {
  api.create()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const restartGame = function (event) {
  func.currGame = new func.GameBoard(['', '', '', '', '', '', '', '', ''], 'x', false)
  $('.col-4').text('')
  $('.who-won').text('')
  event.preventDefault()
  onCreate()
}

module.exports = {
  addLetter,
  restartGame,
  onCreate
}
