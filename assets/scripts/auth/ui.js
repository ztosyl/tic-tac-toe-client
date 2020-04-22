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
  $('#message').text('Your sign-in has failed.').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
