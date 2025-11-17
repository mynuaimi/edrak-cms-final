module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        endpoint: env('AWS_ENDPOINT'),
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
    },
  },
});