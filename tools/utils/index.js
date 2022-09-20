const { readdirSync } = require('fs')

const isSVG = (file) => /.svg$/.test(file)

const removeExtension = (file) => file.split('.')[0]

const toPascalCase = (name) => {
  const newName = name.match(/[a-z0-9]+/gi) || []

  return newName
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join('')
}

const findArg = (name) => {
  const argIndex = process.argv.findIndex((arg) => arg === name)

  if (argIndex < 0) {
    return null
  }

  const arg = process.argv[argIndex + 1] || process.argv[argIndex]

  return arg ?? null
}

const getFoldersFrom = (dir) => {
  return readdirSync(dir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
}

module.exports = {
  isSVG,
  removeExtension,
  toPascalCase,
  findArg,
  getFoldersFrom
}
