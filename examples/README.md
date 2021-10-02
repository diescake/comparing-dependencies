# Examples for comparing-dependencies

## How to use

### Installation

```sh
$ yarn
```

### Placing package.json files

Place the package.json files that you want to compare under the `inputs` directory. Then, the `name` field in each package.json will be output as a column name in the CSV.

```
examples/inputs/
  |- package_00.json
  |- package_01.json
  |- package_02.json
```

These file names can be anything you want.

### Running

```sh
$ yarn run-example
```

### Checking the result

The `result.csv` will be output at the repository root.

```sh
$ open result.csv
```
