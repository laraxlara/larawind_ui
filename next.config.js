/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.module.rules.push({
      test: /\.html/,
      use: [
        {
          loader: "html-loader",
        },
      ],
    });

    console.log(config.module.rules);
    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;
