const getFormFields = require('../../../lib/get-form-fields')
const func = require('./functions')

const addLetter = function (event) {
  if ($(event.target).text() === '') {
    $(event.target).text(func.currGame.currPlayer)
    func.currGame.tray[$(event.target).data('id')] = func.currGame.currPlayer
    if (func.currGame.whoWon() !== null) {
      func.ifWin()
    } else if (func.currGame.currPlayer === 'X') {
      func.currGame.currPlayer = 'O'
    } else {
      func.currGame.currPlayer = 'X'
    }
  }
}

module.exports = {
  addLetter
}
