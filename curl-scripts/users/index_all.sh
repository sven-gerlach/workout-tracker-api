#!/bin/sh

API="http://localhost:4741"
URL_PATH="/users/all"

curl "${API}${URL_PATH}" \
  --include \

  --request GET \

echo
