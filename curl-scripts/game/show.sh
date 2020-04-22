curl "https://tic-tac-toe-wdi-production.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

  echo
