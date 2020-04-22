const store = require('../store')

const signUpSuccess = function (data) {
  console.log('Sign up succeeded. Data: ' + data)
  $('.message').text('You have successfully signed up!').css('color', 'green')
}

const signUpFailure = function (error) {
  console.log('Sign up failed. Error: ' + error)
  $('.message').text('Your sign-up has failed.').css('color', 'red')
}

const signInSuccess = function (data) {
  console.log('Sign in succeeded. Data: ' + data)
  $('.message').text('You have successfully signed in!').css('color', 'green')
  store.user = data.user
  $('.authenticated').show()
  $('.unauthenticated').hide()
}

const signInFailure = function (error) {
  console.log('Sign in failed. Error: ' + error)
  $('.message').text('Your sign-in has failed.').css('color', 'red')
}

const signOutSuccess = function (data) {
  console.log(`Sign out has succeeded. Data is: ${data}`)
  $('.message').text('Sign out successful!').css('color', 'green')
  store.user = null
  $('.unauthenticated').show()
  $('.authenticated').hide()
}

const signOutFailure = function (error) {
  console.log(`Sign out has failed. Error is: ${error}`)
  $('.message').text('Sign out failed!').css('color', 'red')
}

const changePasswordSuccess = function (data) {
  console.log(`Password change succeeded. Data is: ${data}`)
  $('.message').text('Password change successful!').css('color', 'green')
}

const changePasswordFailure = function (error) {
  console.log(`Password change failed. Error is: ${error}`)
  $('.message').text('Password change failed!').css('color', 'red')
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
