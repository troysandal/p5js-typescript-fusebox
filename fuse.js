const {FuseBox, WebIndexPlugin} = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
  sourceMaps: true,
  plugins: [
      WebIndexPlugin()
  ]
});

fuse.dev();

fuse.bundle('app')
  .cache(false)
  .instructions('> sketch.ts +p5')
  .watch()
  .hmr();

fuse.run();
