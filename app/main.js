//Este código en Node.js usa el módulo readline para crear una interfaz de entrada y salida en la consola.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '$ ',
});
rl.prompt(); // Muestra el prompt inicial

rl.on('line', (input) => {
  if (input.trim() === 'exit 0') {
    rl.close(); //cierre de la interfaz antes de salir
    return;
  }
  console.log(`${input}: command not found`);
  rl.prompt(); // Muestra el prompt nuevamente después de cada entrada
});

rl.on('close', () => {
  process.exit(0);
});

//Crea una interfaz de lectura/escritura en la terminal usando process.stdin para la entrada y process.stdout para la salida.
//Muestra un prompt ($ ) en la terminal y espera la entrada del usuario. Cuando el usuario ingresa algo y presiona Enter, la función de callback recibe la entrada (answer). Luego, la interfaz se cierra con rl.close().
