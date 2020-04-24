// const getFormFields = require('../../../lib/get-form-fields')
const func = require('./functions')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const addLetter = function (event) {
  const game = func.currGame
  const index = $(event.target).data('id')
  if (($(event.target).text() === '') && (store.user !== null) && (store.user !== undefined)) {
    $(event.target).text(game.currPlayer)
    func.currGame.tray[index] = game.currPlayer
    const over = game.isOver()
    api.update(index, game.currPlayer, over)
      .then(ui.updateSuccess)
      .catch(ui.updateFailure)
    if ($('.card-text').text() === 'Start the game by clicking on one of the spaces.') {
      $('.card-text').text(`Player ${game.currPlayer} played in space ${index + 1}`)
    } else {
      $(`<p class="card-text">Player ${game.currPlayer} played in space ${index + 1}</p>`).appendTo('.card-text:last')
    }
    if (over) {
      if (game.isDraw) {
        $(`<p class="card-text">You tied! Click below to start a new game.</p>`).appendTo('.card-text:last')
      } else {
        $(`<p class="card-text">Player ${game.currPlayer} won! Click below to start a new game.</p>`).appendTo('.card-text:last')
      }
    } else if (game.currPlayer === 'X') {
      game.currPlayer = 'O'
      $(`<p class="card-text">It is now player ${game.currPlayer}'s turn.</p>`).appendTo('.card-text:last')
    } else {
      game.currPlayer = 'X'
      $(`<p class="card-text">It is now player ${game.currPlayer}'s turn.</p>`).appendTo('.card-text:last')
    }
  }
}

const onCreate = function () {
  api.create()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const restartGame = function (event) {
  func.currGame = new func.GameBoard(['', '', '', '', '', '', '', '', ''], 'X', false)
  $('.col-2').text('')
  $('.game-status').html('<p class="card-text">Start the game by clicking on one of the spaces.</p>')
  onCreate()
}

module.exports = {
  addLetter,
  restartGame,
  onCreate
}
