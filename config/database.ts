// config/database.ts
const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const dbUrl = env('DATABASE_URL');

  // PRODUCTION: Use PostgreSQL when DATABASE_URL exists
  if (dbUrl) {
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
          ssl: { rejectUnauthorized: false },
        },
      },
    };
  }

  // DEVELOPMENT: Use local SQLite in Codespaces or local machine
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
