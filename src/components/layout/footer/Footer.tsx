import Link from 'next/link';
import ScrollToTopButton from '@/components/ui/button/ScrollToTopButton';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer'); // Подключение переводов для секции "Footer"
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        {/* Навигационные ссылки */}
        <div className="mb-6 flex flex-wrap justify-center gap-12 sm:gap-32">
          <Link href="/" passHref>
            <span className="text-white hover:text-green-400 transition duration-300 mb-2 sm:mb-0">
              {t('nav.home')}
            </span>
          </Link>
          <Link href="#about" passHref>
            <span className="text-white hover:text-green-400 transition duration-300 mb-2 sm:mb-0">
              {t('nav.about')}
            </span>
          </Link>
          <Link href="#projects" passHref>
            <span className="text-white hover:text-green-400 transition duration-300 mb-2 sm:mb-0">
              {t('nav.projects')}
            </span>
          </Link>
          <Link href="#contact" passHref>
            <span className="text-white hover:text-green-400 transition duration-300 mb-2 sm:mb-0">
              {t('nav.contact')}
            </span>
          </Link>
        </div>

        {/* Ссылки на политику */}
        <div className="mb-4 flex space-x-4 text-center">
          <Link href="/terms" passHref>
            <span className="text-white hover:text-green-400 hover:underline transition duration-300">
              {t('policies.terms')}
            </span>
          </Link>
          <Link href="/privacy" passHref>
            <span className="text-white hover:text-green-400 hover:underline transition duration-300">
              {t('policies.privacy')}
            </span>
          </Link>
        </div>

        <div className="mt-6 text-center text-sm text-gray-400">
          <p>&#169; {t('copyright', { year: 2024 })}</p>
        </div>

        {/* Кнопка "Наверх" */}
        <div className="mt-4">
          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
