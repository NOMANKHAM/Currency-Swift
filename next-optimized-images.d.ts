declare module 'next-optimized-images' {
    import type { NextConfig } from 'next';
  
    function withOptimizedImages(config: NextConfig): NextConfig;
  
    export default withOptimizedImages;
  }
  