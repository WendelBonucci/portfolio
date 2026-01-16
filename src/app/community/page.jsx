import React from 'react'
import styles from './community.module.css'
import TextCommunity from './TextCommunity/TextCommunity'

export default function page() {
    return (
        <section className={styles.Community}>
            <h1 className={styles.titleCommunity}>Comunidade de Tencologia</h1>
            <p className={styles.textCommunity}>Comunidade para desenvolvedores e entusiastas de tecnologia.</p>

            <section className={styles.contentCommunity}>
                <TextCommunity />
            </section>
        </section>
    )
}