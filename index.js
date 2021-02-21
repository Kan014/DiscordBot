const Discord = require('discord.js'); // Pedimos nuestra libería en este caso discord.js v12 
const client = new Discord.Client(); // Definimos client

client.on('ready', () => {
  console.log(`Estoy listo, sesión iniciada como ${client.user.tag}!`); // Esto lo retornará por consola
});

client.on('message', msg => { //Definimos mensaje 
  if (msg.content === 'ping') { // Creamos una condición
    msg.reply('pong'); // Creamos una respuesta
  } // Cerramos
});

client.login('token'); // Definimos client, para activar a nuestro bot


/*

Este es un código de un bot de discord muy simple.
Si tienes errores puedes pedirme ayuda directamente de los errores se aprende y además estamos por ayudar.

Si quieres ser parte de nuestro proyecto puedes ir a mi discord.gg/EhH7ZCyeQN
Estaremos felices de tener a más personas de nuestro lado

*/
