const { parse } = require('json2csv')

Array.prototype.uniq = function () {
  return [...new Set(this)]
}

exports.createCsv = packageJsons => {
  const allDeps = packageJsons.map(json => [...Object.entries(json.dependencies), ...Object.entries(json.devDependencies)])

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
