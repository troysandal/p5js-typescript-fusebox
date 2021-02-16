// Fuse Box 4.x Config

const { execSync } = require('child_process')
import {
  fusebox,
  sparky,
  pluginLink
} from 'fuse-box'

class Context {
  isProduction:boolean;

  getConfig() {
    return fusebox({
      entry: './src/sketch.ts',
      target: 'browser',
      sourceMap: !this.isProduction,
      devServer: !this.isProduction,
      webIndex: {template: 'src/index.html'},
      resources:{resourceFolder: './', resourcePublicRoot: '/'},
      //link: {resourcePublicRoot: '/'},
      plugins: [
        pluginLink(/\.mp3/, { useDefault: true, resourcePublicRoot: '/' })
      ]
    })
  }
}

const { task, src, exec, rm } = sparky<Context>(Context);

task('clean', async (context) => {
  rm('./dist')
})

task("default", async (context) => {
  await exec('clean')
  const fuse = context.getConfig()
  await fuse.runDev()
})

task("dist", async (context) => {
  await exec('clean')
  context.isProduction = true
  const fuse = context.getConfig()
  await fuse.runProd({
    bundles: {app: 'app.js'}
  })
})
