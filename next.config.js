/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  i18n,
    images: {
      domains: [
        "localhost",
        "unlimed-com.vercel.app"
      ],
    },

    eslint: { ignoreDuringBuilds: true },

    webpack: (config, { isServer }) => {
      if (!isServer) {
        // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.resolve.fallback = {
         // fixes proxy-agent dependencies
         net: false,
         dns: false,
         tls: false,
         assert: false,
         // fixes next-i18next dependencies
         path: false,
         fs: false,
         // fixes mapbox dependencies
         events: false,
         // fixes sentry dependencies
         async_hooks: false,
        //  topLevelAwait: true,
        //  layers: true,
        };
      }
  
      return config;
    },



    // typescript: {
    //   // !! WARN !!
    //   // Dangerously allow production builds to successfully complete even if
    //   // your project has type errors.
    //   // !! WARN !!
    //   ignoreBuildErrors: true,
    // },
  };
  
  module.exports = nextConfig;