module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

// module.exports = {
//   module: {
//     rules: [
//       {
//         type: 'asset',
//         resourceQuery: /url/, // *.svg?url
//       },
//       {
//         test: /\.svg$/i,
//         issuer: /\.[jt]sx?$/,
//         use: ['@svgr/webpack'],
//       },
//     ],
//   },
// };
