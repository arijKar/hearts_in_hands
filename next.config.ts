/** @type {import('next').NextConfig} */

// ⬇️ define variables BEFORE the export
const isProjectSite = true; 
const repoName = "YOUR_REPO_NAME"; // change this to your repo

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(isProjectSite
    ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` }
    : {}),
};

module.exports = nextConfig;
