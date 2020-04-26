// const getFormFields = require('../../../lib/get-form-fields')
const func = require('./functions')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const addLetter = function (event) {
  const game = func.currGame
  const index = $(event.target).data('id')
  const gameOver = game.isOver()
  if (($(event.target).text() === '') && (store.user !== null) && (store.user !== undefined) && (gameOver === false)) {
    if (game.magicNumbers.indexOf(index) === -1) {
      game.tray[index] = game.currPlayer
      api.update(index, game.currPlayer, game.isOver())
        .then(() => {
          ui.updateSuccess(event)
        })
        .catch(ui.updateFailure)
    } else if (game.magicNumbers.indexOf(index) === 0) {
      if (game.currPlayer === 'X') {
        game.tray[index] = 'A'
        api.update(index, 'A', true)
          .then(() => {
            ui.updateSuccessExploder(event)
          })
          .catch(ui.updateFailure)
      } else {
        game.tray[index] = 'B'
        api.update(index, 'B', true)
          .then(() => {
            ui.updateSuccessExploder(event)
          })
          .catch(ui.updateFailure)
      }
      console.log('You hit the exploding space!')
    } else {
      game.tray[index] = game.currPlayer
      api.update(index, game.currPlayer, game.isOver())
        .then(() => {
          ui.updateSuccess(event)
        })
        .catch(ui.updateFailure)
      console.log('You hit the switch space!')
    }
  }
}

const onCreate = function () {
  api.create()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const restartGame = function (event) {
  func.currGame = new func.GameBoard()
  func.currGame.chooseMagicNumbers()
  $('.col-2').text('')
  $('.game-status').html(`<p class="card-text">Start the game by clicking on one of the spaces.</p>`)
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
