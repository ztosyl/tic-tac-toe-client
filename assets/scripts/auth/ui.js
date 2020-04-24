const store = require('../store')
const gameEvents = require('../game/events')
// const events = require('./events')

const modalSwitch = function () {
  $('#sign-up-modal').modal('hide')
  $('#sign-in-modal').modal('show')
  $('.messaging').text('')
}

const modalSwitchOtherWay = function () {
  $('#sign-in-modal').modal('hide')
  $('#sign-up-modal').modal('show')
  $('.messaging').text('')
}

const signUpSuccess = function () {
  $('.messaging').text('Thanks! You will now be redirected to sign-in.').css('color', 'green')
  setTimeout(modalSwitch, 1000)
}

const signUpFailure = function () {
  $('.messaging').text('Sign-up failed. Try again with a different e-mail!').css('color', 'red')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.messaging').text('').css('color', 'green')
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('#sign-in-modal').modal('hide')
  gameEvents.onCreate()
  $('.current-user').text(`Welcome, ${data.user.email}!`)
}

const signInFailure = function () {
  $('.messaging').text('Your sign-in has failed. Try again!').css('color', 'red')
}

const signOutSuccess = function () {
  store.user = null
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('.current-user').text('')
  $('.game-status').html('<p class="card-text unauthenticated">Log in to begin!</p><p class="card-text authenticated">Start the game by clicking on one of the spaces.</p>')
}

const signOutFailure = function () {
  $(`<p class="card-text">Sign-out has failed. Please try again or reload the page.</p>`).appendTo('.card-text:last').css('color', 'red')
}

const changePasswordSuccess = function () {
  $('.messaging').text('Password change successful!').css('color', 'green')
}

const changePasswordFailure = function () {
  $('.messaging').text('Password change failed!').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  modalSwitch,
  modalSwitchOtherWay
}
