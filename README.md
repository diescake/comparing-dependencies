# comparing-dependencies

This is a node application that imports multiple package.json files and outputs the comparison results of dependent libraries as a CSV file.

| library | prj1 | prj2 | prj3 |
| -- | -- | -- | -- |
| dayjs | ◯ | ◯ | |
| moment | | | ◯ |
| react | ◯ | ◯ | |
| react-redux | | ◯ | |
| webpack | ◯ | ◯ | ◯ |

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
