#!/bin/bash

API="http://localhost:4741"
URL_PATH="/users"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "user": {
      "name": "'"${NAME}"'",
      "surname": "'"${SURNAME}"'",
      "age": "'"${AGE}"'",
      "experience": "'"${EXP}"'"
    }
  }'

echo
