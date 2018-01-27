const {FuseBox, WebIndexPlugin} = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: 'src',
  output: 'dist/$name.js',
  sourceMaps: true,
  globals: { "p5": "p5" },
  plugins: [
      WebIndexPlugin()
  ]
});

fuse.dev();

fuse.bundle('app')
  .instructions('> sketch.ts +p5')
  .hmr({reload: true})
  .watch()

fuse.run();
