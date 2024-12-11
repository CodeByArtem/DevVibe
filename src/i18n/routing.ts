import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

// Определяем тип Locale отдельно
export type Locale = 'en' | 'ru' | "ua" | "pl";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ru', "ua", "pl"],

  // Used when no locale matches
  defaultLocale: 'en'
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
