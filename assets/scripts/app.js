'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game/events.js')
const authUi = require('./auth/ui.js')

$(() => {
  $('#sign-up-modal').modal('show')
  $('.go-to-sign-in').on('click', authUi.modalSwitch)
  $('.go-to-sign-up').on('click', authUi.modalSwitchOtherWay)
  $('.col-2').on('click', gameEvents.addLetter)
  $('.restart').on('click', gameEvents.restartGame)
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.sign-out').on('click', authEvents.onSignOut)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.stats').on('click', gameEvents.onStats)
  $('.close-password').on('click', function () {
    $('.messaging').text('')
  })
  $('.guest-login').on('click', authEvents.onGuestLogin)
})
