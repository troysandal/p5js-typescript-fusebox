const {FuseBox, WebIndexPlugin, CopyPlugin} = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
  sourceMaps: true,
  globals: { "p5": "p5" },
  plugins: [
      WebIndexPlugin(),
      CopyPlugin({
        files: ['.mp3', '.wav', '.otf']
      })
  ]
});

fuse.dev({open : true});

fuse.bundle('app')
  .instructions('> sketch.ts +p5')
  .hmr({reload: true})
  .watch()

fuse.run();
