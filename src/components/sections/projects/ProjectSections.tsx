'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import {
  FaGithub,
  FaLink,
} from 'react-icons/fa';
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

const ProjectSection: React.FC = () => { // Указываем тип React.FC для компонента

  const swiperRef    = useRef<SwiperRef | null>(null);
  const [isHovered, setIsHovered] = useState(false); // Состояние для отслеживания наведения мыши

  const projects: Project[] = [
    {
      title: 'WebStudio 1',
      image: '/images/project/webstudio.webp',
      description: 'Проект направлен на создание профессионального и функционального веб-сайта для вашей компании',
      liveLink: 'https://codebyartem.github.io/goit-markup-hw-06/index.html',
      repoLink: 'https://github.com/CodeByArtem/goit-markup-hw-06',
    },
    {
      title: 'WebStudio 2',
      image: '/images/project/webstudio.webp',
      description: 'Проект направлен на создание профессионального и функционального веб-сайта для вашей компании',
      liveLink: 'https://codebyartem.github.io/goit-markup-hw-06/index.html',
      repoLink: 'https://github.com/CodeByArtem/goit-markup-hw-06',
    },
    {
      title: 'WebStudio 3',
      image: '/images/project/webstudio.webp',
      description: 'Проект направлен на создание профессионального и функционального веб-сайта для вашей компании',
      liveLink: 'https://codebyartem.github.io/goit-markup-hw-06/index.html',
      repoLink: 'https://github.com/CodeByArtem/goit-markup-hw-06',
    },
    {
      title: 'WebStudio 4',
      image: '/images/project/webstudio.webp',
      description: 'Проект направлен на создание профессионального и функционального веб-сайта для вашей компании',
      liveLink: 'https://codebyartem.github.io/goit-markup-hw-06/index.html',
      repoLink: 'https://github.com/CodeByArtem/goit-markup-hw-06',
    },
    {
      title: 'WebStudio 5',
      image: '/images/project/webstudio.webp',
      description: 'Проект направлен на создание профессионального и функционального веб-сайта для вашей компании',
      liveLink: 'https://codebyartem.github.io/goit-markup-hw-06/index.html',
      repoLink: 'https://github.com/CodeByArtem/goit-markup-hw-06',
    },
  ];

  // Обработчики для наведения мыши
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="py-9 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Мои Проекты</h2>

        <div className="relative " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
                <div
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1440}
                    height={1000}
                    className="w-full h-72 object-contain py-9"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-base mb-4">{project.description}</p>
                    <div className="flex justify-around">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-400"
                      >
                        <FaLink className="inline-block mr-2" />
                        Живая версия
                      </a>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300"
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

          {/* Кастомные стрелки с условием для hover */}

          <div className="absolute top-1/2 left-36 transform -translate-y-1/2 z-10 md:top-2/3">
            <button
              className="swiper-button-prev text-white text-3xl bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              &#8592;
            </button>
          </div>
          <div
            className={`absolute top-1/2 right-36 transform -translate-y-1/2 z-10 ${isHovered ? 'opacity-100' : 'opacity-50'} md:top-2/3`}
          >
            <button
              className="swiper-button-next text-white text-3xl bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300"
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
