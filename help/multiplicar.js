const fs = require('fs');
const colors = require('colors');
const crearA = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = '';
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log('============='.green);
      console.log(`   TABLA DEL `.rainbow, base);
      console.log('============='.blue);
      console.log(salida.red);
    }

    fs.writeFileSync(`./salida/tabla del ${base}.txt`, salida);
    return `tabla-${base}.txt creada`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearA,
};
