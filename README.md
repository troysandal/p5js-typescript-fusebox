# p5Js + Typescript + Fusebox
Template for [p5Js](https://p5js.org/) projects that uses [Typescript](http://www.typescriptlang.org) and [Fusebox](https://fuse-box.org) for fast, iterative development.  I created this to help port a legacy [Processing Java](https://processing.org) application to p5Js.  Porting it to Typescript with Fusebox meant I had little dependency overhead to worry about (see package.json).

## Getting Started
* I highly recommend [n](https://github.com/tj/n) or [nvm](https://github.com/creationix/nvm) for installing Node - I used Node 10.16.3 & Yarn 6.4.1.
* Clone this project
* `npm i`
* Run `npm run sketch`
* Open http://localhost:4444
* Modify `src/sketch.ts`, save it, watch sketch auto-reload in browser.
* Have fun!

## Publishing to Open Processing [Experimental]
You can publish your sketch to [Open Processing](https://www.openprocessing.org).  This repo is posted for you [as an example](https://www.openprocessing.org/sketch/561721).
* [optiona] Obfuscate your code by setting `uglify` to `true` in fuse.js.
* Run `npm run dist-os`
* Copy/Paste the contents of `./dist/app.js` to your sketch.
* Add the files from `dist/assets` to the sketch Files tab.
* Turn on p5.Sound in your Sketch

## Random
* **Source Maps** are turned on by default which means you can set breakpoints in the browser or in Visual Studio Code (use Chrome Debugging extension).
* Fusebox vs Webpack - Fusebox has incredibly fast hot module reloading and native Typescript support.  QED for me.
