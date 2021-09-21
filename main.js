const fs = require('fs')
const { parse } = require('json2csv')

const DIR_PATH = './inputs'

Array.prototype.uniq = function () {
  return [...new Set(this)]
}

const main = () => {
  const fileNames = fs
    .readdirSync(DIR_PATH, { withFileTypes: true })
    .map(dirent => dirent.name.split('.')[0])
    .filter(v => v)

  const allDeps = fileNames
    .map(fileName => require(`${DIR_PATH}/${fileName}.json`))
    .map(json => ([
      ...Object.entries(json.dependencies),
      ...Object.entries(json.devDependencies)
    ]))

  const libraryNames = allDeps
    .flat()
    .map(dep => dep[0])
    .uniq()
    .filter(libraryName => !libraryName.startsWith('@types/'))
    .sort()

  const header = ['library', ...fileNames]

  const table = [
    header,
    ...libraryNames.map(libraryName => [
      libraryName,
      ...allDeps.map(deps => {
        const dep = deps.find(dep => dep[0] === libraryName)
        return dep?.[1] ?? ''
      }),
    ]),
  ]

  const csv = parse(table, { header: false })

  fs.writeFileSync('result.csv', csv)
}

main()
