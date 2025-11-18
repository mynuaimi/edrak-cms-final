// config/database.ts
const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const dbUrl = env('DATABASE_URL');

  // If DATABASE_URL is not defined, fallback to SQLite (for local dev or CI)
  if (!dbUrl) {
    return {
      connection: {
        client: 'sqlite',
        connection: {
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
        useNullAsDefault: true,
      },
    };
  }

  const config = parse(dbUrl);

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          // DigitalOcean managed Postgres usually needs SSL
          rejectUnauthorized: false,
        },
      },
    },
  };
};