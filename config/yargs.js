const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Lista la tabla que se creo',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'Hasta donde quiero la tabla',
  })
  .check((argv, options) => {
    if (isNaN(argv.b, argv.h)) {
      throw 'La base y el hasta tiene que ser un numero';
    }
    return true;
  }).argv;

module.exports = argv;
