import React from 'react';
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import "../../styles/globals.css";




interface PageMetadata extends Metadata {
  title: string;
  description: string;
}


// Метаданные для страницы
export const metadata: PageMetadata  = {
  title: "Artem Zhuravlov - Full-Stack Developer",
  description: "Experienced Full-Stack Developer specializing in modern web technologies. Creating seamless user experiences and robust back-end solutions. Explore my projects and expertise!",
};

export default async function RootLayout({
                                           children,
                                           params,
                                         }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Проверка валидности locale
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  // Загрузка сообщений для выбранной локали
  const messages = await getMessages();

  return (
    <html lang={locale}>
    <head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content="full-stack developer, web development, Artem Zhuravlov" />

      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content="https://portfolio-amber-six-98.vercel.app/images/hotoroom.webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/webp" />
      <meta property="og:image:alt" content="Image of Artem Zhuravlov's portfolio" />

    </head>
    <body>

    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
