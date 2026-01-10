import React from 'react'
import styles from './Skills.module.css'
import { DiJavascript1 } from "react-icons/di";
import { FaReact, FaWordpress } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

export default function Skills() {
    const cards = [
        {
            title: 'Javascript',
            text: '"A base sólida da minha carreira é o JavaScript, por meio do qual desenvolvi lógica de programação, domínio de funcionalidades e habilidades para criar websites, sistemas funcionais e jogos."',
            icon: <DiJavascript1 />,
        },
        {
            title: 'Next.js & React',
            text: '"Utilizo React e o framework Next.js para maior rapidez no desenvolvimento de websites, com foco em performance, SEO aprimorado e criação de aplicações escaláveis utilizando SSR, SSG, APIs e boas práticas."',
            icon: <SiNextdotjs />,
        },
        {
            title: 'Python',
            text: '"Com Python, possuo experiência em automação de tarefas, criação de gráficos e relatórios, desenvolvimento de chatbots e agentes de IA, além da construção de APIs para aplicações mobile e front-end (React)."',
            icon: <FaPython />,
        },
        {
            title: 'PostgreSQL',
            text: '"Conhecimento básico em PostgreSQL para o desenvolvimento de websites e aplicativos que necessitam de um banco de dados mais robusto, seguro, com recursos avançados e melhor performance."',
            icon: <BiLogoPostgresql />,
        },
        {
            title: 'WordPress',
            text: '“Utilizo o WordPress para o desenvolvimento de sites institucionais, landing pages e personalização de temas, atendendo projetos que exigem manutenção constante pelos clientes, incluindo lojas virtuais com gestão feita pelo próprio usuário.”',
            icon: <FaWordpress />,
        },
        {
            title: 'BaaS - FireBase',
            text: '“O principal Backend as a Service (BaaS) que utilizo em meus projetos é o Firebase, por ser altamente eficiente em projetos de pequeno e médio porte, que não exigem um banco de dados muito grande ou altamente personalizado.”',
            icon: <IoLogoFirebase />,
        },
    ]

    return (
        <section className={styles.contentSkills} id="skill">
            <section className={styles.sectionTop}>
                <h2 className={styles.titleSkil}>Minhas Skills</h2>
                <p className={styles.paragrafSkil}>Tecnologias e soluções que utilizo no dia a dia</p>
            </section>

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
                        <h3 className={styles.subtitle}>{card.title}</h3>
                        <p className={styles.subparagraf}>{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
