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
      title: 'WebStudio 1',
      image: '/images/project/webstudio.webp',
      description: 'Этот проект направлен на создание профессионального и функционального веб-сайта для вашей компании, который поможет увеличить ваш онлайн-присутствие и улучшить взаимодействие с клиентами.',
      liveLink: 'https://codebyartem.github.io/goit-markup-hw-06/index.html',
      repoLink: 'https://github.com/CodeByArtem/goit-markup-hw-06',
    },
    {
      title: 'WebStudio 2',
      image: '/images/project/webstudio.webp',
      description: 'Данный проект представляет собой сайт для малого бизнеса с удобной системой управления и современным дизайном. Мы предлагаем решение, которое сочетает в себе простоту и функциональность.',
      liveLink: 'https://codebyartem.github.io/goit-markup-hw-06/index.html',
      repoLink: 'https://github.com/CodeByArtem/goit-markup-hw-06',
    },
    {
      title: 'WebStudio 3',
      image: '/images/project/webstudio.webp',
      description: 'Данный проект представляет собой сайт для малого бизнеса с удобной системой управления и современным дизайном. Мы предлагаем решение, которое сочетает в себе простоту и функциональность.',
      liveLink: 'https://codebyartem.github.io/goit-markup-hw-06/index.html',
      repoLink: 'https://github.com/CodeByArtem/goit-markup-hw-06',
    },
    {
      title: 'WebStudio 4',
      image: '/images/project/webstudio.webp',
      description: 'Данный проект представляет собой сайт для малого бизнеса с удобной системой управления и современным дизайном. Мы предлагаем решение, которое сочетает в себе простоту и функциональность.',
      liveLink: 'https://codebyartem.github.io/goit-markup-hw-06/index.html',
      repoLink: 'https://github.com/CodeByArtem/goit-markup-hw-06',
    },
  ];

  return (
    <section id="projects"
             className="py-9 min-h-screen bg-black text-green-400 flex items-center justify-center"
             style={{ backgroundImage: 'url(/images/matrix-background.webp)', backgroundSize: 'cover' }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-3xl font-extrabold mb-8 text-white drop-shadow-md"
            style={{
              textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 20px #00FF00',
            }}>Мои Проекты</h2>

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
                    className="w-full h-[350px] object-contain  lg:max-h-[300px]"
                  />
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-black"
                        style={{ textShadow: '0 0 5px #00FF00, 0 0 10px #00FF00' }}>{project.title}</h3>
                    <p
                      className="text-lg md:text-xl mb-4 text-black font-bold"
                      style={{
                        textShadow:
                          '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00',
                      }}
                    >
                      {project.description}
                    </p>
                    <div className="flex justify-around">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:text-red-600 transition-all duration-300 text-lg font-medium border-2 border-black hover:border-red-600 px-2 py-1 rounded-md"
                      >
                        <FaLink className="inline-block mr-2" />
                        Живая версия
                      </a>
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:text-red-600 transition-all duration-300 text-lg font-medium border-2 border-black hover:border-red-600 px-2 py-1 rounded-md"
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
          <div className="absolute top-1/2 left-40 transform -translate-y-1/2 z-10">
            <button
              className="text-neon-green text-3xl bg-black bg-opacity-70 p-3 rounded-full shadow-lg hover:shadow-neon hover:text-white transition-all duration-300"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              &#8592;
            </button>
          </div>

          {/* Правая стрелка */}
          <div className="absolute top-1/2 right-40 transform -translate-y-1/2 z-10">
            <button
              className="text-neon-green text-3xl bg-black bg-opacity-70 p-3 rounded-full shadow-lg hover:shadow-neon hover:text-white transition-all duration-300"
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
