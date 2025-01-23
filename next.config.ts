import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
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
