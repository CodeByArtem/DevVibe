import React from 'react';
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import "../../styles/globals.css";

// Метаданные для страницы
export const metadata: Metadata = {
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
    <body>
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
