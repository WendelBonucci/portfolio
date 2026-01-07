"use client"
import React from 'react'
import styles from './Navgation.module.css'
import Link from 'next/link'

export default function Navgation() {
    const dt_links = [
        { name: 'Home', href: '/', },
        { name: 'Sobre', href: '/', },
        { name: 'Habilidades', href: '/', },
        { name: 'Jornada', href: '/', },
        { name: 'Projetos', href: '/', },
    ]

    return (
        <nav className={styles.Navgation}>
            <ul className={styles.listNav}>
                {dt_links.map((link, index) => (
                    <li key={index}>
                        <Link className={styles.linkNav} href={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}