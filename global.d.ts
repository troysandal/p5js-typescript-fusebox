// // This file will add both p5 instanced and global intellisence
import P5 = require('p5');
import * as p5Sound from 'p5/lib/addons/p5.sound'
import * as p5Global from 'p5/global'

export = P5;
export as namespace p5;

declare global {
    interface Window {
        p5: typeof P5,
    }
}
