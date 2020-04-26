const store = require('../store')
const func = require('./functions')

const createGameSuccess = function (data) {
  store.game = data.game
}

const createGameFailure = function () {
  $(`<p class="card-text">Game could not be created. Please try again.</p>`).appendTo('.card-text:last').css('color', 'red')
}

const updateSuccess = function (event) {
  const game = func.currGame
  const index = $(event.target).data('id')
  $(event.target).text(game.currPlayer)
  if (($('.card-text.authenticated').text() === 'Start the game by clicking on one of the spaces.') || ($('.card-text.authenticated').text() === 'Start the game by clicking on one of the spaces.')) {
    $('.card-text').text(`Player ${game.currPlayer} played in space ${index + 1}`)
  } else {
    $(`<p class="card-text">Player ${game.currPlayer} played in space ${index + 1}</p>`).appendTo('.card-text:last')
  }
  if (game.isOver()) {
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

const updateFailure = function () {
  $(`<p class="card-text">Game could not be updated. Please try again.</p>`).appendTo('.card-text:last').css('color', 'red')
}

const successfullyGotGames = function (data) {
  console.log('Data is: ', data)
  const statsArray = func.calcStats(data)
  const total = (statsArray[0] + statsArray[1] + statsArray[2])
  $('.total-games').text(`${total}`)
  $('.games-won').text(`${statsArray[0]}`)
  $('.games-lost').text(`${statsArray[1]}`)
  $('.games-tied').text(`${statsArray[2]}`)
}

const failedGettingGames = function () {
  $('.messaging').text('Could not load stats. Please try again.').css('color', 'red')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateSuccess,
  updateFailure,
  successfullyGotGames,
  failedGettingGames
}
