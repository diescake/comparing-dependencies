# comparing-dependencies

This is a node application that imports multiple package.json files and outputs the comparison results of dependent libraries as a CSV file.

| library | prj1 | prj2 | prj3 |
| -- | -- | -- | -- |
| dayjs | ^1.10.3 | ^1.10.2 | |
| moment | | | ^2.29.1 |
| react | ^17.0.2 | ^17.0.2 | |
| react-redux | | ^7.2.4 | |
| webpack | ^5.51.1 | ^5.47.1 | ^4.46.0 |

## How to use

### Installation

```sh
$ yarn
```

### Placing package.json files

Place the package.json files that you want to compare under the inputs directory. Then, the file name will be output as a column name in the CSV.  
For example, if the file name is "prj1.json", the CSV column name will be "prj1".

```
inputs/
  |- prj1.json
  |- prj2.json
  |- prj3.json
```

### Running

```sh
$ yarn generate
```

### Confirming result

The `result.csv` will be output.

```sh
$ open result.csv
```
