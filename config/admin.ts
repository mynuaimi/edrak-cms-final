export default ({ env }) => ({
  auth: {
    // Production: Uses ADMIN_JWT_SECRET
    // Development: Falls back to 'dev-admin-jwt-secret-placeholder'
    secret: env('ADMIN_JWT_SECRET', 'dev-admin-jwt-secret-placeholder'),

    // Fixes the warning: "admin.auth.options.expiresIn is deprecated…"
    sessions: {
      // Maximum time a refresh token is valid (default: 30 days)
      maxRefreshTokenLifespan: env.int('ADMIN_MAX_REFRESH_TOKEN_LIFESPAN', 30 * 24 * 60 * 60),

      // Maximum lifetime of a session (default: 7 days)
      maxSessionLifespan: env.int('ADMIN_MAX_SESSION_LIFESPAN', 7 * 24 * 60 * 60),
    },
  },

  apiToken: {
    salt: env('API_TOKEN_SALT', 'dev-api-token-salt-placeholder'),
  },

  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'dev-transfer-token-salt-placeholder'),
    },
  },

  // Required for Strapi v5
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY', 'dev-encryption-key-placeholder-must-be-long'),
  },

  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
