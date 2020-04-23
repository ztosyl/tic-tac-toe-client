const config = require('../config')
const store = require('../store')

// const getCurrent = function () {
//   return $.ajax({
//     url: config.apiUrl + 'games/?over=false',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const create = function () {
  return $.ajax({
    url: config.apiUrl + 'games',
    method: 'POST',
    data: '{}',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (index, currPlayer, isOver) {
  return $.ajax({
    url: config.apiUrl + 'games/' + store.game.id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: index,
          value: currPlayer
        },
        over: isOver
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  update
  // getCurrent
}
