const forProduction = process.argv.slice(2).includes('--release')

require('esbuild')
  .build({
    entryPoints: ['main.js'],
    bundle: true,
    minify: forProduction,
    outfile: 'dist/main.js',
  })
  .catch(() => process.exit(1))
