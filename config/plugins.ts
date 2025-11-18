// config/plugins.js
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        // Public base URL (optional, but great for DO Spaces + CDN)
        baseUrl: env('CDN_URL'),
        rootPath: env('CDN_ROOT_PATH', ''),

        s3Options: {
          endpoint: env('AWS_ENDPOINT'), // e.g. https://fra1.digitaloceanspaces.com
          region: env('AWS_REGION', 'fra1'),

          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
          },

          params: {
            Bucket: env('AWS_BUCKET'),
            ACL: env('AWS_ACL', 'public-read'),
            // 15 minutes default signed URL expiry
            signedUrlExpires: parseInt(env('AWS_SIGNED_URL_EXPIRES', 15 * 60), 10),
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
