// CommonJS, every file is module (by default)
// Modules - encapsulated Code (only share minimum)
// you split your code into modules to run from one locations
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade');

sayHi(`susan`);
sayHi(names.mark);
sayHi(names.matthew);