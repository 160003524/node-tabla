const { crearA } = require('./help/multiplicar');

const argv = require('./config/yargs');
console.clear();

//console.log(argv);
//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=');
//console.log(base);
//const base = 7;

crearA(argv.b, argv.l, argv.h)
  .then((crearA) => console.log(crearA.rainbow))
  .catch((err) => console.log(err));
