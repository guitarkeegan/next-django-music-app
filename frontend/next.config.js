/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: 'http://localhost:8000',
    _NODE_ENV: 'developement'
  }
}

module.exports = nextConfig
