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
      webpack: '^5.51.1',
    },
  },
  {
    name: 'proj_02',
    dependencies: {
      react: '^17.0.2',
      dayjs: '^1.10.2',
      react-redux: '^7.2.4',
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

// library,proj_01,proj_02,proj_03
// dayjs,^1.10,3,,
// moment,,,^2.29.1
// react,^17.0.2,^17.0.2,
// react-redux,,^7.2.4,
// webpack,^5.51.1,^5.47.1,^4.46.0

```

## Example codes

- [Examples for comparing-dependencies](./examples)
