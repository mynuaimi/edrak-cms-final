export default ({ env }) => {
  const isProd = env('NODE_ENV') === 'production';

  const appKeys = env.array(
    'APP_KEYS',
    isProd ? undefined : ['devKeyA', 'devKeyB']
  );

  if (isProd && (!appKeys || appKeys.length === 0)) {
    throw new Error('APP_KEYS must be defined in production');
  }

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: appKeys,
    },
  };
};
