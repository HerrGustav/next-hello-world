/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode makes the app render twice in a dev environment
  // ref.: https://github.com/vercel/next.js/issues/35822
  // + https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-strict-mode
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
