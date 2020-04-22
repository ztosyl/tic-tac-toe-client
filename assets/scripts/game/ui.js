const createGameSuccess = function (data) {
  console.log('Game successfuly created. Data is: ' + data)
}

const createGameFailure = function (error) {
  console.log('Game was not created. Error is: ' + error)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
