'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';
import 'swiper/css';
import { FaGithub, FaLink } from 'react-icons/fa';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, Keyboard } from 'swiper/modules';
import { SwiperRef } from 'swiper/react';

interface Project {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  repoLink: string;
}

const ProjectSection: React.FC = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const projects: Project[] = [
    {
      title: 'WebStudio',
      image: '/images/project/webstudio.webp',
      description: 'Этот проект направлен на создание профессионального и функционального веб-сайта для вашей компании, который поможет увеличить ваш онлайн-присутствие и улучшить взаимодействие с клиентами.',
      liveLink: 'https://codebyartem.github.io/goit-markup-hw-06/index.html',
      repoLink: 'https://github.com/CodeByArtem/goit-markup-hw-06',
    },
    {
      title: 'Daily photo',
      image: '/images/project/photography.png',
      description: 'Этот проект представляет собой уникальную образовательную платформу для любителей фотографии. Мы предлагаем удобный интерфейс, современные инструменты и курсы, которые помогут раскрыть ваш творческий потенциал и освоить искусство фотографии на профессиональном уровне.',
      liveLink: 'https://ihordid.github.io/FullSpectrum/',
      repoLink: 'https://github.com/CodeByArtem/Full',
    },
    {
      title: 'Movie Library',
      image: '/images/project/venom.png',
      description: 'Библиотека с фильмами — это коллекция фильмов, позволяющая легко находить, просматривать и сохранять любимые произведения. Удобная навигация и фильтры делают поиск нужного фильма быстрым и простым.',
      liveLink: 'https://goit-react-hw-05-opal-one.vercel.app/',
      repoLink: 'https://github.com/CodeByArtem/goit-react-hw-05',
    },
    {
      title: 'Contact Management Website',
      image: '/images/project/phone.png',
      description: 'Простое и удобное приложение для хранения, управления и организации ваших контактов. Идеально подходит для тех, кто ценит порядок и доступность информации в любое время.',
      liveLink: 'https://goit-react-hw-08-six-black.vercel.app/',
      repoLink: 'https://github.com/CodeByArtem/goit-react-hw-08',
    },
    {
      title: 'Fresh Harvest',
      image: '/images/project/fresh.png',
      description: 'удобный сервис доставки свежих органических овощей прямо к вашему порогу. Наслаждайтесь качественными и полезными продуктами каждый день',
      liveLink: 'https://codebyartem.github.io/FullSpectrum/',
      repoLink: 'https://github.com/CodeByArtem/FullSpectrum',
    },
    {
      title: 'TravelTrucks',
      image: '/images/project/travel.png',
      description: 'В нашем каталоге вы найдете все, что нужно для вашего путешествия — от удобства до функциональности. ',
      liveLink: 'https://urban-drive-ijfb.vercel.app/',
      repoLink: 'https://github.com/CodeByArtem/UrbanDrive',
    },
    {
      title: 'Tea Oasis',
      image: '/images/project/lipton.png',
      description: 'Ласкаво просимо до Чайної Оази - вашого місця для відкриття світу справжнього чаю! ',
      liveLink: 'https://codebyartem.github.io/wonderful-friends/',
      repoLink: 'https://github.com/CodeByArtem/wonderful-friends',
    },
    {
      title: 'Portfolio',
      image: '/images/project/portfolio.png',
      description: 'Проект представляет собой платформу для разработки и создания функциональных веб-сайтов, ' +
        'обеспечивающих высокую производительность и уникальный пользовательский опыт. ',
      liveLink: 'https://ihordid.github.io/return-js/index.html',
      repoLink: 'https://github.com/IhorDid/return-js',
    },
    {
      title: 'AQUATRACK',
      image: '/images/project/vodatreck.png',
      description: ' Идея проекта заключается в создании удобного веб-приложения, предназначенного для того, ' +
        'чтобы помочь пользователям отслеживать ежедневное потребление воды.',
      liveLink: 'https://final-project-frontend-weld.vercel.app',
      repoLink: 'https://github.com/Kamila-Lohvynenko/final-project-frontend',
    },
  ];

  return (
    <section
      id="projects"
      className="py-9 min-h-screen bg-black text-green-400 flex items-center justify-center"
      style={{ backgroundImage: 'url(/images/matrix-background.webp)', backgroundSize: 'cover' }}
    >
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl md:text-3xl font-extrabold mb-8 text-white drop-shadow-md"
          style={{
            textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 20px #00FF00',
          }}
        >
          Мои Проекты
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
                    className="w-full  h-96 2xl:h-[700px] object-contain "
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
                        Живая версия
                      </a>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:text-red-600 transition-all duration-300 text-sm sm:text-lg font-medium border-2 border-black hover:border-red-600 px-2 py-1 rounded-md backdrop-blur-md bg-opacity-30 bg-black"
                      >
                        <FaGithub className="inline-block mr-2" />
                        Репозиторий
                      </a>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Левая стрелка */}
          <div
            className="absolute mobile:top-[23%] sm:top-1/2 left-8 transform -translate-y-1/2 z-10 sm:left-18 md:left-60 mt-12 lg:mt-28 ">
            <button
              className="text-neon-green text-xl bg-black bg-opacity-70 p-3 rounded-full shadow-lg hover:shadow-neon hover:text-white transition-all duration-300 mobile:text-xl mobile:p-2 mt-2 "
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              &#8592;
            </button>
          </div>

          {/* Правая стрелка */}
          <div
            className="absolute mobile:top-[23%] sm:top-1/2 right-8 transform -translate-y-1/2 z-10 sm:right-16 md:right-60 mt-12 lg:mt-28">
            <button
              className="text-neon-green text-xl bg-black bg-opacity-70 p-3 rounded-full shadow-lg hover:shadow-neon hover:text-white transition-all duration-300 mobile:text-xl mobile:p-2 mt-2  "
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
