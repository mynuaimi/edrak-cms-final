module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: { // <-- This is the new wrapper
          endpoint: env('AWS_ENDPOINT'),
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'), // Add this line
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        },
      },
    },
  },
});