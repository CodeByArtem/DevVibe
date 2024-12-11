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
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/faviconn-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

    </head>
    <body>

    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
