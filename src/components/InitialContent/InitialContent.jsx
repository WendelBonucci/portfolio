import React from 'react'
import styles from './InitialContent.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function InitialContent() {
    return (
        <section className={styles.InitialContent}>
            <section className={styles.divisionContent}>

                <div className={styles.contentImage}>
                    <div className={styles.image}>
                        <Image
                            src="/dev.jpeg"
                            alt="Logo WB"
                            width={350}
                            height={350}
                            priority
                            className={styles.imageDev}
                        />
                    </div>
                </div>

                <div className={styles.descritionContent}>
                    <h1 className={styles.titleInitial}>Olá, prazer me chamo Wendell Bonucci</h1>
                    <p className={styles.paragrafInitial}>Sou Engenheiro de Software</p>
                    <Link className={styles.linkInitial} href='#about'>Saiba Mais</Link>
                </div>
            </section>
        </section>
    )
}
