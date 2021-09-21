import { parse } from 'json2csv'

const uniq = (arr: string[]) => [...new Set(arr)]

const extractLibraryNames = (allDeps: Array<Array<[string, unknown]>>) => {
  const _libraryNames = allDeps.flat().map(dep => dep[0])

  return uniq(_libraryNames)
    .filter(libraryName => !libraryName.startsWith('@types/'))
    .sort()
}

export const createCsv = (packageJsons: Array<Record<string, unknown>>) => {
  const allDeps = packageJsons.map(json => [
    ...Object.entries(json.dependencies as Record<string, string>),
    ...Object.entries(json.devDependencies as Record<string, string>),
  ])
  const libraryNames = extractLibraryNames(allDeps)

  const fileNames = packageJsons.map(json => json.name) as string[]
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
