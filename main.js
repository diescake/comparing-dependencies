const fs = require('fs')
const { parse } = require('json2csv')

const DIR_PATH = './inputs'
const ARTIFACT_NAME = 'result.csv'

Array.prototype.uniq = function () {
  return [...new Set(this)]
}

const createCsv = packageJsons => {
  const allDeps = packageJsons.map(json => ([
    ...Object.entries(json.dependencies),
    ...Object.entries(json.devDependencies)
  ]))

  const libraryNames = allDeps
    .flat()
    .map(dep => dep[0])
    .uniq()
    .filter(libraryName => !libraryName.startsWith('@types/'))
    .sort()

  const fileNames = packageJsons.map(json => json.name)
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

  return parse(table, { header: false })
}

const packageJsons = fs
  .readdirSync(DIR_PATH)
  .filter(fileName => fileName.split('.')[1] === 'json')
  .map(fileName => require(`${DIR_PATH}/${fileName}`))

const csv = createCsv(packageJsons);
fs.writeFileSync(ARTIFACT_NAME, csv)
