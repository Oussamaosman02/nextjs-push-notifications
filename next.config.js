/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PUBLIC: process.env.PUBLIC,
    PRIVATE: process.env.PRIVATE,
    URI: process.env.URI,
  },
};

module.exports = nextConfig;
