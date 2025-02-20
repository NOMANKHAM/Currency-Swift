import type { NextConfig } from 'next';
import withOptimizedImages from 'next-optimized-images';
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    SITE_NAME: "CurrencySwift",
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(
  withOptimizedImages({
    ...nextConfig,
    optimizeImagesInDev: false,
  })
);
