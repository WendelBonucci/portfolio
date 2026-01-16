import React from 'react'
import styles from './TextCommunity.module.css'
import Link from 'next/link'

export default function TextCommunity() {
    return (
        <section className={styles.textCommunity}>
            <div className={styles.boxText}>
                <h2 className={styles.subTitle}>Comunidade feita para Desenvolvedores</h2>
                <p className={styles.text}>Em setembro de 2025, como mencionei anteriormente na minha jornada no portfólio, criei uma comunidade com o objetivo de reunir apaixonados por tecnologia. O espaço conecta desenvolvedores front-end e back-end, designers, profissionais de marketing e networking digital, além de pessoas que simplesmente gostam da área de TI, para que possam se conhecer, trocar ideias e colaborar mutuamente.</p>
                <Link className={styles.linkCommunitty} href='https://chat.whatsapp.com/IdD1UPQBtkYJJDvJL7zXmy' target='_blank'>Entrar para Comunidade</Link>
            </div>
        </section>
    )
}
