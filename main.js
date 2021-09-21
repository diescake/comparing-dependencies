import { parse } from 'json2csv'

const uniq = arr => [...new Set(arr)]

export const extractLibraryNames = allDeps => {
  const _libraryNames = allDeps.flat().map(dep => dep[0])

  return uniq(_libraryNames)
    .filter(libraryName => !libraryName.startsWith('@types/'))
    .sort()
}

const createCsv = packageJsons => {
  const allDeps = packageJsons.map(json => [...Object.entries(json.dependencies), ...Object.entries(json.devDependencies)])
  const libraryNames = extractLibraryNames(allDeps)

  const fileNames = packageJsons.map(json => json.name)
  const header = ['library', ...fileNames]

  const table = [
    header,
    ...libraryNames.map(libraryName => [
      libraryName,
      ...allDeps.map(deps => {
        const foundDep = deps.find(dep => dep[0] === libraryName)
        return foundDep?.[1] ?? ''
      }),
    ]),
  ]

  return parse(table, { header: false })
}
