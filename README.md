# comparing-dependencies

This is a npm library that imports multiple package.json files and outputs the comparison results of depending libraries as a CSV format string.

| library     | prj_01  | prj_02  | prj_03  |
| ----------- | ------- | ------- | ------- |
| dayjs       | ^1.10.3 | ^1.10.2 |         |
| moment      |         |         | ^2.29.1 |
| react       | ^17.0.2 | ^17.0.2 |         |
| react-redux |         | ^7.2.4  |         |
| webpack     | ^5.51.1 | ^5.47.1 | ^4.46.0 |

## How to use

```sh
$ yarn add comparing-dependencies
```

## API

```ts
createCsv(packageJsons: PackageJson[]): string
```

Note: `PackageJson` type is declared in [type-fest](https://github.com/sindresorhus/type-fest).

### Usage

```ts
import { createCsv } from 'comparing-dependencies'

const csv = createCsv([
  {
    name: 'proj_01',
    dependencies: {
      react: '^17.0.2',
      dayjs: '^1.10.3',
    },
    devDependencies: {
      webpack: '^5.51.1',
    },
  },
  {
    name: 'proj_02',
    dependencies: {
      react: '^17.0.2',
      dayjs: '^1.10.2',
      react-redux: '^7.2.4',
    },
    devDependencies: {
      webpack: '^5.47.1',
    },
  },
  {
    name: 'proj_03',
    dependencies: {
      moment: '^2.29.1',
      webpack: '^4.46.0',
    },
  },
])

console.log(csv)

// "library","prj_01","prj_02","prj_03"
// "dayjs","^1.10.3","^1.10.2",""
// "moment","","","^2.29.1"
// "react","^17.0.2","^17.0.2",""
// "react-redux","","^7.2.4",""
// "webpack","^5.51.1","^5.47.1","^4.46.0"
```

## Example codes

- [Examples for comparing-dependencies](./examples)

### Replacing package.json files

Place the package.json files that you want to compare under the `./examples/inputs` directory. Then, the `name` field in each package.json will be output as a column name in the CSV.

```
examples/inputs/
  |- example_package_01.json
  |- example_package_02.json
  |- example_package_03.json
```

These file names can be anything you want.

### Running

```sh
$ yarn run-example
```

### Checking the result

The `result.csv` will be output at the `./examples`.

```sh
$ open ./examples/result.csv
```
