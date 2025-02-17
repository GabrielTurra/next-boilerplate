import { withSentryConfig } from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withSentryConfig(
  withSentryConfig(nextConfig, {
    org: 'gmtech-1e',
    project: 'next-boilerplate',
    silent: !process.env.CI,
    widenClientFileUpload: true,
    reactComponentAnnotation: {
      enabled: true
    },
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true
  })
);
