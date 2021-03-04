function allLowerCase (inputString) {
  return inputString.toLowerCase()
}

function capitalize (inputString) {
  return inputString[0].toUpperCase() + inputString.substring(1).toLowerCase()
}

module.exports = {
  allLowerCase,
  capitalize
}
