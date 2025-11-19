export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // Production: Uses real APP_KEYS from DigitalOcean
    // Development: Falls back to these placeholder keys so it starts without .env
    keys: env.array('APP_KEYS', ['devKeyA', 'devKeyB']),
  },
});
