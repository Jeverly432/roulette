import withTwin from './withTwin.mjs'

/**
 * @type {import('next').NextConfig}
 */

export default withTwin({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config)=>{
    config.externals =[...config.externals, {canvas : 'canvas'}]
    return config
  },
  experimental: {
    esmExternals: "loose"
  }
})
