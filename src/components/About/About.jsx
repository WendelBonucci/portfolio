"use client";

import { useState } from "react";
import styles from "./About.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);

    const aboutSlide = [
        {
            title: "Sobre mim",
            text: "Muito prazer, meu nome é Wendell Bonucci. Sou estudante de Ciência da Computação há dois anos e meio, com experiência no desenvolvimento de projetos Full Stack. Possuo maior domínio em Front-end e BaaS, e estou em formação para me tornar Engenheiro de Software.",
        },
        {
            title: "Minha Missão",
            text: "Apresentar soluções tecnológicas viáveis e personalizadas, que se adaptem à realidade de cada empreendedor, promovendo visibilidade, automação de processos e qualidade na entrega de produtos e serviços.",
        },
        {
            title: "O que eu faço?",
            text: "Atuo no desenvolvimento de soluções SaaS como freelancer através da startup NextSolve. Crio sites, sistemas e agentes de IA utilizando Next.js, Python, SQL e CMS como WordPress, sempre com mentalidade empreendedora.",
        },
    ];

    const aboutSocial = [
        { icon: <FaInstagram />, href: 'https://www.instagram.com/srrwende.ll/' },
        { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/wendell-bonucci-8b2aa237a/' },
        { icon: <FaGithub />, href: 'https://github.com/WendelBonucci' }
    ]

    return (
        <section className={styles.contentAbout} id="about">
            <div className={styles.divisionContent}>
                <div className={styles.carouselInformAbout}>
                    <Swiper
                        modules={[Pagination, Autoplay, EffectFade]}
                        slidesPerView={1}
                        loop

                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {aboutSlide.map((about, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.sliderText}>
                                    <h1 className={styles.titleAbout}>{about.title}</h1>
                                    <p className={styles.paragrafAbout}>{about.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <span className={styles.counter}>
                        {activeIndex + 1} / {aboutSlide.length}
                    </span>
                </div>

                <div className={styles.imageAbout}>
                    <div className={styles.dimensionImage}>
                        <Image
                            src="/dev.jpeg"
                            alt="Wendell Bonucci - Desenvolvedor"
                            width={350}
                            height={350}
                            priority
                            className={styles.imageDev}
                        />
                    </div>
                    <div className={styles.socialAbout}>
                        {aboutSocial.map((social, index) => (
                            <ul className={styles.listSocial} key={index}>
                                <li key={index}>
                                    <Link href={social.href} className={styles.linkSocial} target="_blank">{social.icon}</Link>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}