/** @type {import('next').NextConfig} */
const nextConfig = {}


if (process.env.NODE_ENV === 'development') {
  import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
}

module.exports = nextConfig
