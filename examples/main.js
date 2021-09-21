const fs = require('fs')
const path = require('path')
const createCsv = require('../main').createCsv

const DIR_PATH = './inputs'
const ARTIFACT_NAME = 'result.csv'

const packageJsons = fs
  .readdirSync(path.resolve(__dirname, DIR_PATH))
  .filter(fileName => fileName.split('.')[1] === 'json')
  .map(fileName => require(`${DIR_PATH}/${fileName}`))

const csv = createCsv(packageJsons)
fs.writeFileSync(ARTIFACT_NAME, csv)
