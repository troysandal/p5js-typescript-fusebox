const { execSync } = require('child_process')
const { src, task, context } = require("fuse-box/sparky")
const {
  FuseBox,
  WebIndexPlugin,
  CopyPlugin,
  QuantumPlugin
} = require('fuse-box')

context(class {
  getConfig() {
    return FuseBox.init({
      homeDir: 'src',
      output: 'dist/$name.js',
      target : 'browser@es5',
      sourceMaps: !this.isProduction,
      globals: !this.isProduction ? { p5: 'p5' } : {},
      plugins: [
        WebIndexPlugin(),
        CopyPlugin({
          files: ['.mp3', '.wav', '.vlw', '.ttf']
        }),
        this.isProduction && QuantumPlugin({
          uglify: false,
          ensureES5: true,
          treeshake : true,
          bakeApiIntoBundle: "app"
        })
      ]
    })
  }

  createBundle(fuse, instructions) {
    const bundle = fuse.bundle('app').instructions(instructions)

    if (!this.isProduction) {
      fuse.dev()
      bundle.watch().hmr({ reload: true })
    }
    return bundle
  }

  async cleanDist() {
    await src("./dist").clean("dist/").exec()
  }
})

task('clean', async (context) => {
  await context.cleanDist()
})

task("default", ['clean'], async (context) => {
  const fuse = context.getConfig()
  context.createBundle(fuse, '> sketch.ts +p5')
  await fuse.run()
})

task("dist", ['clean'], async (context) => {
  context.isProduction = true
  const fuse = context.getConfig()
  context.createBundle(fuse, '> [sketch.ts]')
  await fuse.run()
})

task("dist-open-processing", ['dist'], async (context) => {
  await src('dist/app.js').each((file) => {
    execSync(`sed -i '' 's/\\/assets\\///' "${file.filepath}"`)
  }).exec()
})
