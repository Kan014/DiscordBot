const Discord = require('discord.js'); // Requerimos la librería
const client = new Discord.Client(); // Definimos client

// Evento ready
client.on('ready', () => {
  console.log(`Estoy listo sesión iniciada como ${client.user.tag}`); // Esto será retornado por la consola
  client.user.setActivity(`Github.com`, { type: "WATCHING" }); // setActivity será el estado de nuestro bot, lo que se debe mostrar en el estado, según lo establecido [Viendo Github.com]
});

// Evento message
client.on('message', message => { // Definimos message o msg
  
  if (message.content === 'ping') { // Creamos una definición
    message.reply('Pong :ping_pong:!!'); // Creamos una respuesta
  } // Cerramos
}); // Volvemos a cerrar

client.login('token'); // Definimos client


// Luego iniciar el bot con " node index.js "
// Estaré dejando una explicación sobre esto :)
