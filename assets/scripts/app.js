'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')

$(() => {
  $('#sign-up-modal').modal('show')
  $('.col-4').on('click', gameEvents.addLetter)
  $('.restart').on('click', gameEvents.restartGame)
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.sign-out').on('click', authEvents.onSignOut)
  $('.change-password').on('submit', authEvents.onChangePassword)
})
