# p5Js + Typescript + Fusebox
Template for [p5Js](https://p5js.org/) projects that uses [Typescript](http://www.typescriptlang.org) and [Fusebox](https://fuse-box.org) for fast, iterative development.  I created this to help port a legacy [Processing Java](https://processing.org) application to p5Js.  Porting it to Typescript with Fusebox meant I had little dependency overhead to worry about (see package.json).

## Getting Started
* I highly recommend [n](https://github.com/tj/n) or [nvm](https://github.com/creationix/nvm) for installing Node - I used Node 8.9.4 & Yarn 1.3.2.
* Clone this project
* Run `yarn sketch` (browser opens to sketch automatically)
* Modify `src/sketch.ts`, save it, watch sketch auto-reload in browser.
* Have fun!

## Random
* **tsc compile fails** - There are issues in p5.d.ts and p5.global-mode.d.ts that cause compile errors `Cannot find name 'COLOR_MODE'`... and `Class 'Noise' incorrectly extends base class 'Oscillator'`.  You can ignore these, I've submitted Issues to p5js and they should be addressed in their next release.  However if you want to fix them...
  * Open `p5.d.ts`
  * On line 10316, change the return type of `Noise:amp` from `void` to `AudioParam`
  * Add `///<reference path="p5.global-mode.d.ts" />` to the top of `p5.d.ts`
  * Save & `yarn compile`
* **Source Maps** are turned on by default which means you can set breakpoints in the browser or in Visual Studio Code (use Chrome Debugging extension).
* Typescript vs ES6+Flow - Typescript+Fusebox is just easier to setup vs ES6 + Flow + Babel.
* Fusebox vs Webpack - Fusebox has incredibly fast hot module reloading and native Typescript support.  QED for me.
