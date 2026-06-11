import type { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'vitberg';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? `/${repoName}` : undefined,
  allowedDevOrigins: ['192.168.1.8'],
};

export default nextConfig;
