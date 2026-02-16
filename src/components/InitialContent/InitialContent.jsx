"use client"
import { useEffect } from 'react'
import styles from './InitialContent.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function InitialContent() {
    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true,
        })
    })

    const dt_text = [
        { title: 'Olá, prazer me chamo Wendell Bonucci', text: 'Engenheiro de Software', link: 'Saiba Mais' }
    ]

    return (
        <section className={styles.InitialContent}>
            <section className={styles.divisionContent}>

                <div className={styles.contentImage}>
                    <div className={styles.image}>
                        <Image
                            src="/wbb.jpeg"
                            alt="Logo WB"
                            width={350}
                            height={350}
                            priority
                            className={styles.imageDev}
                        />
                    </div>
                </div>


                {dt_text.map((item, index) => (
                    <div
                        className={styles.descritionContent}
                        key={index}
                    >
                        <h1
                            className={styles.titleInitial}
                            data-aos="fade-up"
                            data-aos-delay={100}>{item.title}</h1>
                        <p
                            className={styles.paragrafInitial}
                            data-aos="fade-up"
                            data-aos-delay={90}
                        > {item.text}</p>
                        <Link
                            className={styles.linkInitial}
                            href='#about'
                            data-aos="fade-up"
                            data-aos-delay={80}
                        >{item.link}</Link>
                    </div>
                ))}

            </section>
        </section>
    )
}
