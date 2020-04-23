const store = require('../store')

const createGameSuccess = function (data) {
  console.log('Game successfuly created. Data is: ' + data)
  store.game = data.game
  console.log(store.game)
}

const createGameFailure = function (error) {
  console.log('Game was not created. Error is: ' + error)
}

const updateSuccess = function (data) {
  console.log('Game successfully updated. Data is: ' + data)
}

const updateFailure = function (error) {
  console.log('Game was not updated. Error is: ' + error)
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateSuccess,
  updateFailure
}
