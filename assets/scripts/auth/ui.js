const store = require('../store')
// const api = require('./api')
// const gameEvents = require('../game/events')

const modalSwitch = function () {
  $('#sign-up-modal').modal('hide')
  $('.messaging').text('')
  $('#sign-in-modal').modal('show')
}

const signUpSuccess = function () {
  // console.log('Sign up succeeded. Data: ' + data)
  $('.messaging').text('You have successfully signed up! You will be redirected to sign in now.').css('color', 'green')
  setTimeout(modalSwitch, 2000)
}

const signUpFailure = function () {
  // console.log('Sign up failed. Error: ' + error)
  $('.messaging').text('Sign-up failed. Try again with a different e-mail!').css('color', 'red')
}

const signInSuccess = function (data) {
  store.user = data.user
  // console.log(gameEvents.onCreate())
  $('.messaging').text('You have successfully signed in!').css('color', 'green')
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('#sign-in-modal').modal('hide')
  $('.messaging').text('')
}

const signInFailure = function () {
  // console.log('Sign in failed. Error: ' + error)
  $('.messaging').text('Your sign-in has failed. Try again!').css('color', 'red')
}

const signOutSuccess = function () {
  store.user = null
  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const signOutFailure = function (error) {
  console.log(`Sign out has failed. Error is: ${error}`)
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
  changePasswordFailure
}
