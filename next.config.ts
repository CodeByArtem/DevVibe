import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Указано строгое значение
        hostname: 'freelancehunt.com',
        pathname: '/shields/display/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);


