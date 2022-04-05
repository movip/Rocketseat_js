function getFlagValue(message){
  const args = process.argv.indexOf(message) + 1
  return process.argv[args]
}
module.exports = getFlagValue;