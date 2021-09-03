const fs = require('fs')
const _ = require('lodash');
const { parse } = require('json2csv');

const DIR_PATH = './inputs'

const fileNames = fs
  .readdirSync(DIR_PATH, { withFileTypes: true })
  .map(dirent => dirent.name.split('.')[0])

const deps = fileNames
  .map(fileName => require(`${DIR_PATH}/${fileName}.json`))
  .map(json => ([
    ...Object.keys(json.dependencies),
    ...Object.keys(json.devDependencies),
  ]))

const libraries = _.uniq(deps.flat()).sort()
const header = ['library', ...fileNames]

const table = [
  header,
  ...libraries.map(library => ([
    library,
    ...deps.map(v => v.includes(library) ? '◯' : ''),
  ]))
]

const csv = parse(table)

fs.writeFileSync('result.csv', csv)
