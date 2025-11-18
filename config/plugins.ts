// config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        // Optional CDN / custom domain for files
        baseUrl: env('CDN_URL'),          // e.g. https://your-space-name.ams3.cdn.digitaloceanspaces.com
        rootPath: env('CDN_ROOT_PATH', ''),

        s3Options: {
          // For DigitalOcean Spaces: keep endpoint
          // For real AWS S3: you can remove endpoint or leave it empty
          endpoint: env('AWS_ENDPOINT'),  // e.g. https://ams3.digitaloceanspaces.com

          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
          },

          region: env('AWS_REGION'),

          params: {
            ACL: env('AWS_ACL', 'public-read'),
            signedUrlExpires: env.int
              ? env.int('AWS_SIGNED_URL_EXPIRES', 15 * 60)
              : parseInt(env('AWS_SIGNED_URL_EXPIRES', 15 * 60), 10),
            Bucket: env('AWS_BUCKET'),
          },
        },
      },

      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
