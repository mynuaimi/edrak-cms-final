const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const dbUrl = env('DATABASE_URL');
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
        ssl: true,
      },
    },
  };
};