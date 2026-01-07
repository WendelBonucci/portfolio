import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'

export default function Button() {
    const dt_buttons = [
        { name: 'Contato', href: '/contact' },
        { name: 'Trabalhos', href: '/work' },
    ]

    return (
        <section className={styles.contentBtn}>
            <ul className={styles.listBtn}>
                {dt_buttons.map((button, index) => (
                    <li key={index}>
                        <Link className={styles.linkBtn} href={button.href}>{button.name}</Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}