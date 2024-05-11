const { Client } = require('pg');

const dbClient = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Temporal1.',
  port: 5432,
});

dbClient.connect((err) => {
  if (err) {
    console.error('[ ERROR ] >>>', err);
  } else {
    console.log('Conexion establecida');
  }
});

dbClient.query('LISTEN friend_update');

module.exports = dbClient;
