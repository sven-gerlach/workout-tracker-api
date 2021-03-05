#!/bin/bash

API="http://localhost:4741"

curl "${API}/workouts/${ID_W}/exercise/${ID_E}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "set": {
      "weight": "'"${WEIGHT}"'",
      "repetitions": "'"${REP}"'"
    }
  }'

echo
