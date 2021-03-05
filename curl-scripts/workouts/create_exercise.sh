#!/bin/bash

API="http://localhost:4741"
URL_PATH="/workouts"

curl "${API}${URL_PATH}/${ID}/exercise" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "exercise": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESC}"'"
    }
  }'

echo
