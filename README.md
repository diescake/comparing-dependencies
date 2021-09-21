# comparing-dependencies

This is a npm library that imports multiple package.json files and outputs the comparison results of depending libraries as a CSV file.

| library     | prj1    | prj2    | prj3    |
| ----------- | ------- | ------- | ------- |
| dayjs       | ^1.10.3 | ^1.10.2 |         |
| moment      |         |         | ^2.29.1 |
| react       | ^17.0.2 | ^17.0.2 |         |
| react-redux |         | ^7.2.4  |         |
| webpack     | ^5.51.1 | ^5.47.1 | ^4.46.0 |

## How to use

```
yarn add comparing-dependencies
```

## API

### createCsv

```ts
createCsv(jsons: {}[]): string
```

## Examples

- [Examples for comparing-dependencies](./examples)
