const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

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

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  modalSwitch,
  modalSwitchOtherWay
}
