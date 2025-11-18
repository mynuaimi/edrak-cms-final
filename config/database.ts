// config/database.js
const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  // Parse the DATABASE_URL environment variable
  const { host, port, database, user, password } = parse(env('DATABASE_URL'));

  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        // Use SSL but do not reject self-signed certificates
        ssl: { rejectUnauthorized: false }, 
      },
    },
  }
};