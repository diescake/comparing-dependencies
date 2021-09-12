const fs = require('fs')
const { parse } = require('json2csv');

const DIR_PATH = './inputs'

const uniq = arr => [... new Set(arr)]

const fileNames = fs
  .readdirSync(DIR_PATH, { withFileTypes: true })
  .map(dirent => dirent.name.split('.')[0])
  .filter(v => v)

const deps = fileNames
  .map(fileName => require(`${DIR_PATH}/${fileName}.json`))
  .map(json => ([
    ...Object.keys(json.dependencies),
    ...Object.keys(json.devDependencies),
  ]))

const libraries = uniq(deps.flat())
  .filter(library => !library.startsWith('@types/'))
  .sort()

const header = ['library', ...fileNames]

const table = [
  header,
  ...libraries.map(library => ([
    library,
    ...deps.map(v => v.includes(library) ? '◯' : ''),
  ]))
]

const csv = parse(table, { header: false })

fs.writeFileSync('result.csv', csv)
