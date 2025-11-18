// config/database.js
const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  // If a DATABASE_URL is provided, parse it and use PostgreSQL
  if (env('DATABASE_URL')) {
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
          ssl: { rejectUnauthorized: false }, 
        },
      },
    }
  }

  // Fallback for build-time or local development:
  // Use a simple SQLite database
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };
};