// const getFormFields = require('../../../lib/get-form-fields')
const func = require('./functions')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const addLetter = function (event) {
  const game = func.currGame
  const index = $(event.target).data('id')
  const gameOver = game.isOver()
  console.log('gameOver is', gameOver)
  if (($(event.target).text() === '') && (store.user !== null) && (store.user !== undefined) && (gameOver === false)) {
    game.tray[index] = game.currPlayer
    api.update(index, game.currPlayer, game.isOver())
      .then(() => { ui.updateSuccess(event)} )
      .catch(ui.updateFailure)
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

const onStats = function () {
  api.getFinishedGames()
    .then(ui.successfullyGotGames)
    .catch(ui.failedGettingGames)
}

module.exports = {
  addLetter,
  restartGame,
  onCreate,
  onStats
}
