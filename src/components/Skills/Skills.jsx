import React from 'react'
import styles from './Skills.module.css'
import {CgWebsite} from "react-icons/cg";
import {FaReact,FaWordpress} from "react-icons/fa";
import {SiNextdotjs} from "react-icons/si";

export default function Skills() {
    const cards = [
        {
            title: 'Websites',
            text: 'Criação de sites modernos, responsivos e otimizados para SEO e performance.',
            icon: <CgWebsite />,
        },
        {
            title: 'Next.js & React',
            text: 'Aplicações escaláveis utilizando SSR, SSG, APIs e boas práticas.',
            icon: <SiNextdotjs />,
        },
        {
            title: 'WordPress',
            text: 'Sites institucionais, landing pages e personalização de temas.',
            icon: <FaWordpress />,
        },
    ]

    return (
        <section className={styles.contentSkills} id="skills">
            <header className={styles.header}>
                <h2>Minhas Skills</h2>
                <p>Tecnologias e soluções que utilizo no dia a dia</p>
            </header>

            <div className={styles.grid}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className={styles.icon}>
                            {card.icon}
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
