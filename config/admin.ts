export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),

    // Fixes the warning:
    // "admin.auth.options.expiresIn is deprecated…"
    sessions: {
      // Maximum time a refresh token is valid (default: 30 days)
      maxRefreshTokenLifespan: env.int('ADMIN_MAX_REFRESH_TOKEN_LIFESPAN', 30 * 24 * 60 * 60),

      // Maximum lifetime of a session (default: 7 days)
      maxSessionLifespan: env.int('ADMIN_MAX_SESSION_LIFESPAN', 7 * 24 * 60 * 60),
    },
  },

  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },

  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'), // ← add this in DO env vars
    },
  },

  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },

  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
