'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef } from 'react';
import 'swiper/css';
import { FaGithub, FaLink } from 'react-icons/fa';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, Keyboard } from 'swiper/modules';
import { SwiperRef } from 'swiper/react';
import { useTranslations } from 'next-intl';
import AOS from 'aos';
import 'aos/dist/aos.css';



interface Project {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  repoLink: string;
}

const ProjectSection: React.FC = () => {
  useEffect(() => {
    // Инициализируем AOS
    AOS.init({
      duration: 3000, // Время анимации
      once: true,     // Анимация срабатывает только один раз
    });
  }, []);
  const swiperRef = useRef<SwiperRef | null>(null);
  const t = useTranslations('ProjectSection');
  const projects: Project[] = [
    {
      title: t('webstudio.title'),
      image: '/images/project/webstudio.webp',
      description: t('webstudio.description'),
      liveLink: 'https://codebyartem.github.io/goit-markup-hw-06/index.html',
      repoLink: 'https://github.com/CodeByArtem/goit-markup-hw-06',
    },
    {
      title: t('dailyPhoto.title'),
      image: '/images/project/photography.png',
      description: t('dailyPhoto.description'),
      liveLink: 'https://ihordid.github.io/FullSpectrum/',
      repoLink: 'https://github.com/CodeByArtem/Full',
    },
    {
      title: t('movieLibrary.title'),
      image: '/images/project/venom.png',
      description: t('movieLibrary.description'),
      liveLink: 'https://goit-react-hw-05-opal-one.vercel.app/',
      repoLink: 'https://github.com/CodeByArtem/goit-react-hw-05',
    },
    {
      title: t('contactManagement.title'),
      image: '/images/project/phone.png',
      description: t('contactManagement.description'),
      liveLink: 'https://goit-react-hw-08-six-black.vercel.app/',
      repoLink: 'https://github.com/CodeByArtem/goit-react-hw-08',
    },
    {
      title: t('freshHarvest.title'),
      image: '/images/project/fresh.png',
      description: t('freshHarvest.description'),
      liveLink: 'https://codebyartem.github.io/FullSpectrum/',
      repoLink: 'https://github.com/CodeByArtem/FullSpectrum',
    },
    {
      title: t('travelTrucks.title'),
      image: '/images/project/travel.png',
      description: t('travelTrucks.description'),
      liveLink: 'https://urban-drive-ijfb.vercel.app/',
      repoLink: 'https://github.com/CodeByArtem/UrbanDrive',
    },

    {
      title: t('portfolio.title'),
      image: '/images/project/portfolio.png',
      description: t('portfolio.description'),
      liveLink: 'https://ihordid.github.io/return-js/index.html',
      repoLink: 'https://github.com/IhorDid/return-js',
    },

    {
      title: t('teaOasis.title'),
      image: '/images/project/lipton.png',
      description: t('teaOasis.description'),
      liveLink: 'https://codebyartem.github.io/wonderful-friends/',
      repoLink: 'https://github.com/CodeByArtem/wonderful-friends',
    },

    {
      title: t('aquatrack.title'),
      image: '/images/project/vodatreck.png',
      description: t('aquatrack.description'),
      liveLink: 'https://final-project-frontend-weld.vercel.app',
      repoLink: 'https://github.com/Kamila-Lohvynenko/final-project-frontend',
    },
    {
      title: t('sass.title'),
      image: '/images/project/sass.jpg',
      description: t('sass.description'),
      liveLink: 'https://codebyartem.github.io/sasswork/',
      repoLink: 'https://github.com/CodeByArtem/sasswork',

    }

  ];

  return (
    <section
      id="projects"
      className="py-9 min-h-screen bg-black text-green-400 flex items-center justify-center"
      style={{ backgroundImage: 'url(/images/matrix-background.webp)', backgroundSize: 'cover' }}
    >
      <div data-aos="zoom-in-up" className="container mx-auto text-center">
        <h2
          className="text-4xl md:text-3xl font-extrabold mb-8 text-white drop-shadow-md mt-10"
          style={{
            textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 20px #00FF00',
          }}
        >
          {t('projects.title')}
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Keyboard]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            loop={true}
            className="swiper-container"
            ref={swiperRef}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1440}
                    height={1000}
                    className="w-full  lg:h-96 2xl:h-[700px] object-contain "
                  />
                  <div className="p-6">
                    <h3
                      className="text-xl md:text-2xl font-bold mb-6 text-black"
                      style={{ textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00' }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-lg md:text-xl mb-4 text-black font-bold"
                      style={{
                        textShadow:
                          '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
                      }}
                    >
                      {project.description}
                    </p>
                    <div className="flex justify-around gap-4 sm:gap-6">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:text-red-600 transition-all duration-300 text-sm sm:text-lg font-medium border-2 border-black hover:border-red-600 px-2 py-1 rounded-md backdrop-blur-md bg-opacity-30 bg-black"
                      >
                        <FaLink className="inline-block mr-2" />
                        {t('projects.liveVersion')}
                      </a>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:text-red-600 transition-all duration-300 text-sm sm:text-lg font-medium border-2 border-black hover:border-red-600 px-2 py-1 rounded-md backdrop-blur-md bg-opacity-30 bg-black"
                      >
                        <FaGithub className="inline-block mr-2" />
                        {t('projects.repository')}
                      </a>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Левая стрелка */}
          <div
            className="absolute mobile:top-[20%] sm:top-1/4 left-8 transform -translate-y-1/2 z-10   mt-12 lg:mt-28">
            <button
              className="text-neon-green text-xl bg-black bg-opacity-70 p-3 rounded-full shadow-lg hover:shadow-neon hover:text-white transition-all duration-300 mobile:text-xl mobile:p-2 mt-2
      lg:text-5xl "
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              &#8592;
            </button>
          </div>

          {/* Правая стрелка */}
          <div
            className="absolute mobile:top-[20%] sm:top-1/4 right-8 transform -translate-y-1/2 z-10   mt-12 lg:mt-28">
            <button
              className="text-neon-green text-xl bg-black bg-opacity-70 p-3 rounded-full shadow-lg hover:shadow-neon hover:text-white transition-all duration-300 mobile:text-xl mobile:p-2 mt-2
      lg:text-5xl "
              onClick={() => swiperRef.current?.swiper.slideNext()}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
