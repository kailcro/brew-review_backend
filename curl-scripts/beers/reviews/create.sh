#!/bin/bash

API="http://localhost:4741"
URL_PATH="/reviews"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "review": {
      "title": "'"${TITLE}"'",
      "content": "'"${CONTENT}"'",
      "rating": "'"${RATING}"'",
      "reviewer": "'"${USER_ID}"'",
      "beerId": "'"${BEER_ID}"'"
    }
  }'

echo
