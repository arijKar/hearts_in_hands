/** @type {import('next').NextConfig} */
// next.config.js  (CommonJS)
const isProd = process.env.NODE_ENV === "production";
const repo = "hearts_in_hands"; // <-- EXACT GitHub repo name

module.exports = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // For GitHub Pages project sites: username.github.io/<repo>
  ...(isProd ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {}),
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
};
