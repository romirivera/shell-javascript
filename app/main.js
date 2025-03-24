//Este código en Node.js usa el módulo readline para crear una interfaz de entrada y salida en la consola.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('$ ', (answer) => {
  console.log(`Ingresaste: ${answer}`);
  rl.close();
});

//Crea una interfaz de lectura/escritura en la terminal usando process.stdin para la entrada y process.stdout para la salida.
//Muestra un prompt ($ ) en la terminal y espera la entrada del usuario. Cuando el usuario ingresa algo y presiona Enter, la función de callback recibe la entrada (answer). Luego, la interfaz se cierra con rl.close().
