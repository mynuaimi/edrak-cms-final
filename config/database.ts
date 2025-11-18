const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  const dbUrl = env('DATABASE_URL');

  console.log('*** Strapi DB config – DATABASE_URL =', dbUrl);

  if (!dbUrl) {
    console.error('*** Strapi DB config – ERROR: DATABASE_URL is missing!');
    // You can either throw or fallback to sqlite. For now, let’s throw so it's obvious.
    throw new Error('DATABASE_URL is not defined in environment');
  }

  const config = parse(dbUrl);

  console.log('*** Strapi DB config – parsed host =', config.host);
  console.log('*** Strapi DB config – parsed port =', config.port);
  console.log('*** Strapi DB config – parsed database =', config.database);

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
          rejectUnauthorized: false,
        },
      },
    },
  };
};