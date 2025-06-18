import themeConfig from './theme.config.mjs';
import { withDs3 } from '@consensys/ds3-config/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // custom options here
};

export default withDs3(nextConfig, themeConfig);