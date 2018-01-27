# p5Js + Typescript + Fusebox
Template for [p5Js](https://p5js.org/) projects that uses Typescript and Fusebox for fast, iterative development.  I created this to help port a legacy Processing Java application to p5Js.  Porting it to Typescript with Fusebox, which implicitly supports Typescript, meant I had little dependency overhead to worry about (see package.json).

## Getting Started
* I highly recommend [n](https://github.com/tj/n) or [nvm](https://github.com/creationix/nvm) for installing Node.  Install Node & a package manager - as of this writing I am using Node 8.9.4 & Yarn 1.3.2.
* Clone this project
* Run `yarn sketch`
* Open http://localhost:4444.
* Make changes to `src/sketch.ts`

## More Info
* Typescript vs ES6+Flow - Typescript+Fusebox is just way easier to setup vs ES6 + Flow + Babel.
* Fusebox vs Webpack - Incredibly fast hot module reloading.
* Source Maps are included by default which means you can set debug breakpoints in browsers like Chrome or via the Visual Studio Code Chrome Debugging extension.
