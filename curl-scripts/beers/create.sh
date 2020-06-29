#!/bin/bash

API="http://localhost:4741"
URL_PATH="/beers"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "beer": {
      "name": "'"${NAME}"'",
      "type": "'"${TYPE}"'",
      "brewery": "'"${BREWERY}"'"
    }
  }'

echo
