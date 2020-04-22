'use strict'

const events = require('./events.js')

$(() => {
  $('.col-4').on('click', events.addLetter)
  $('.restart').on('click', events.restartGame)
})
