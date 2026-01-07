"use client"
import React from 'react'
import styles from './Header.module.css'

// import of components
import Logo from './components/Logo/Logo'
import Navgation from './components/Navgation/Navgation'
import Button from './components/Buttons/Button'

export default function Header() {
    return (
        <header className={styles.Header}>
            <section className={styles.contentHeader}>
                <Logo />
                <Navgation />
                <Button />
            </section>
        </header>
    )
} 