import { createCsv } from '../dist/main.js'

const packageJsons = [
  {
    name: 'prj_01',
    dependencies: {
      react: '^17.0.2',
      dayjs: '^1.10.3',
    },
    devDependencies: {
      webpack: '^5.51.1',
    },
  },
  {
    name: 'prj_02',
    dependencies: {
      react: '^17.0.2',
      dayjs: '^1.10.2',
      'react-redux': '^7.2.4',
    },
    devDependencies: {
      webpack: '^5.47.1',
    },
  },
  {
    name: 'prj_03',
    dependencies: {
      moment: '^2.29.1',
      webpack: '^4.46.0',
    },
  },
]

describe('createCsv', () => {
  it('normal', () => {
    const csv = createCsv(packageJsons)

    expect(csv).toEqual([
      '"library","prj_01","prj_02","prj_03"',
      '"dayjs","^1.10.3","^1.10.2",""',
      '"moment","","","^2.29.1"',
      '"react","^17.0.2","^17.0.2",""',
      '"react-redux","","^7.2.4",""',
      '"webpack","^5.51.1","^5.47.1","^4.46.0"',
    ].join('\n'))
  })
})
