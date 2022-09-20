const path = require('path')
const { readdirSync, writeFileSync, existsSync } = require('fs')
const { findArg, isSVG, removeExtension, toPascalCase } = require('../utils')

const mapFilesFrom = (dir, files) => {
  const isTypescript = findArg('--ts')
  const folder = dir.substring(dir.lastIndexOf('/') + 1)

  let extName = 'ts'

  const mapContent = [
    files.map((file) => `import ${toPascalCase(file)} from './${file}.svg'`).join('\n'),
    '',
    `const ${folder} = {`,
    `${files.map((file) => `  '${file}': ${toPascalCase(file)},`).join('\n')}`,
    '}\n',
    `export type ${folder.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    )}Props = keyof typeof ${folder}\n`,
    `export default ${folder}`
  ]

  if (!isTypescript) {
    extName = 'js'

    const typeIndex = mapContent.findIndex((line) => line.includes('export type'))

    mapContent.splice(typeIndex, 1)
  }

  writeFileSync(`${dir}/index.${extName}`, mapContent.join('\n'))

  console.log('\x1b[37m\x1b[32m', `Map file in ${dir} folder!`)
}

const mapSVG = () => {
  const dir = findArg('--dir') || './src/svg'

  if (!existsSync(path.resolve(dir))) {
    console.log('\x1b[31m', 'SVG folders not found!')

    return
  }

  try {
    const packDir = path.resolve(dir)
    const files = readdirSync(packDir).filter(isSVG).map(removeExtension)

    if (files.length === 0) {
      throw 'error'
    }

    mapFilesFrom(packDir, files)
  } catch (error) {
    console.log('\x1b[31m', `No files in "${dir}" folder!`)
  }
}

mapSVG()
