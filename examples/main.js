import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { createCsv } from '../dist/main.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputsPath = path.resolve(__dirname, 'inputs')
const outputFilePath = path.resolve(__dirname, 'result.csv')

const packageJsons = fs
  .readdirSync(inputsPath)
  .filter(fileName => fileName.split('.')[1] === 'json')
  .map(fileName => JSON.parse(fs.readFileSync(path.resolve(inputsPath, fileName), 'utf8')))

const csv = createCsv(packageJsons)

fs.writeFileSync(outputFilePath, csv)
