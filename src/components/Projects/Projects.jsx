"use client"
import { useState } from 'react'
import styles from './Projects.module.css'
import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi'

export default function Projects() {
    const [openModal, setOpenModal] = useState(null);

    const openProjectModal = (id) => {
        setOpenModal(id)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setOpenModal(null)
        document.body.style.overflow = 'unset'
    }

    const projects = [
        {
            id: 1,
            title: 'Site NextSolve',
            image: '/webNext.png',
            text: 'Site desenvolvido para empresa NextSolve',
            href: 'https://nextsolve.vercel.app/',
            tec: ['Next.js', 'Css Modules'],
            github: 'https://github.com/WendelBonucci/Nextsolve-Studio-Vision/tree/main/src/app',
            demo: 'https://nextsolve.vercel.app/',
        },
        {
            id: 2,
            title: 'Site NextSolve',
            image: '/webNext.png',
            text: 'Site desenvolvido para empresa NextSolve',
            href: 'https://nextsolve.vercel.app/',
            tec: ['Next.js', 'Css Modules'],
            github: 'https://github.com/WendelBonucci/Nextsolve-Studio-Vision/tree/main/src/app',
            demo: 'https://nextsolve.vercel.app/',
        },
        {
            id: 3,
            title: 'Site NextSolve',
            image: '/webNext.png',
            text: 'Site desenvolvido para empresa NextSolve',
            href: 'https://nextsolve.vercel.app/',
            tec: ['Next.js', 'Css Modules'],
            github: 'https://github.com/WendelBonucci/Nextsolve-Studio-Vision/tree/main/src/app',
            demo: 'https://nextsolve.vercel.app/',
        },
        {
            id: 4,
            title: 'Site NextSolve',
            image: '/webNext.png',
            text: 'Site desenvolvido para empresa NextSolve',
            href: 'https://nextsolve.vercel.app/',
            tec: ['Next.js', 'Css Modules'],
            github: 'https://github.com/WendelBonucci/Nextsolve-Studio-Vision/tree/main/src/app',
            demo: 'https://nextsolve.vercel.app/',
        },
        {
            id: 5,
            title: 'Site NextSolve',
            image: '/webNext.png',
            text: 'Site desenvolvido para empresa NextSolve',
            href: 'https://nextsolve.vercel.app/',
            tec: ['Next.js', 'Css Modules'],
            github: 'https://github.com/WendelBonucci/Nextsolve-Studio-Vision/tree/main/src/app',
            demo: 'https://nextsolve.vercel.app/',
        },
        {
            id: 6,
            title: 'Site NextSolve',
            image: '/webNext.png',
            text: 'Site desenvolvido para empresa NextSolve',
            href: 'https://nextsolve.vercel.app/',
            tec: ['Next.js', 'Css Modules'],
            github: 'https://github.com/WendelBonucci/Nextsolve-Studio-Vision/tree/main/src/app',
            demo: 'https://nextsolve.vercel.app/',
        },
    ]

    return (
        <section className={styles.sectionProjects} id="project">
            <div className={styles.containerProjects}>
                <h2 className={styles.projectsTitle}>Meus Projetos</h2>
                <p className={styles.projectsSubtitle}>Alguns dos projetos que desenvolvi</p>

                <div className={styles.contentCards}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.cardProject}>
                            <div className={styles.cardImage}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.projectImage}
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDescription}>{project.description}</p>

                                <div className={styles.techStack}>
                                    {project.tech && project.tech.map((tech, index) => (
                                        <span key={index} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>

                                <button
                                    className={styles.viewButton}
                                    onClick={() => openProjectModal(project.id)}
                                >
                                    Ver Projeto
                                </button>
                            </div>

                            {openModal === project.id && (
                                <>
                                    <div
                                        className={styles.modalOverlay}
                                        onClick={closeModal}
                                    />
                                    <div className={styles.modal}>
                                        <button
                                            className={styles.closeButton}
                                            onClick={closeModal}
                                            aria-label="Fechar modal"
                                        >
                                            <FiX />
                                        </button>

                                        <h3 className={styles.modalTitle}>{project.title}</h3>
                                        <p className={styles.modalDescription}>{project.description}</p>

                                        <div className={styles.modalButtons}>
                                            <Link
                                                className={styles.modalButton}
                                                href={project.github}
                                                target='_blank'
                                                onClick={closeModal}
                                            >
                                                <FiGithub />
                                                Ver Código
                                            </Link>
                                            <Link
                                                className={`${styles.modalButton} ${styles.primary}`}
                                                href={project.demo}
                                                target='_blank'
                                                onClick={closeModal}
                                            >
                                                <FiExternalLink />
                                                Visitar Site
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
