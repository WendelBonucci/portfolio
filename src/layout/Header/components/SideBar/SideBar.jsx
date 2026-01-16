"use client"
import { useEffect, useState, useCallback, useRef } from 'react'
import styles from './SideBar.module.css'
import Link from 'next/link'
import { FiX } from 'react-icons/fi'
 
export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false)
    const sidebarRef = useRef(null)
    const buttonRef = useRef(null)

    const SideLinks = [
        { name: 'Home', href: '/' },
        { name: 'Sobre', href: '#about' },
        { name: 'Habilidades', href: '#skill' },
        { name: 'Jornada', href: '#journey' },
        { name: 'Projetos', href: '#project' },
        { name: 'Contato', href: '/contact' }
    ]

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = useCallback(() => setIsOpen(false), [])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                isOpen &&
                sidebarRef.current &&
                !sidebarRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                closeMenu()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen, closeMenu])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <section className={styles.sectionSideBar}>
            <button
                ref={buttonRef}
                className={`${styles.Menu} ${isOpen ? styles.active : ""}`}
                onClick={toggleMenu}
                aria-label='Abrir menu'
                aria-expanded={isOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Overlay */}
            <div
                className={`${styles.overlay} ${isOpen ? styles.overlayActive : ""}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            <aside
                ref={sidebarRef}
                className={`${styles.containerSideBar} ${isOpen ? styles.openBox : ""}`}
                aria-label='Menu lateral'
            >
                <div className={styles.sidebarHeader}>
                    <h2 className={styles.sidebarTitle}>Menu</h2>
                    <button
                        className={styles.closeButton}
                        onClick={closeMenu}
                        aria-label='Fechar menu'
                    >
                        <FiX />
                    </button>
                </div>

                <nav className={styles.contentNav}>
                    {SideLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className={styles.navLink}
                            onClick={closeMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className={styles.sidebarFooter}>
                    <p>Wendell Bonucci</p>
                    <span>Engenheiro de Software</span>
                </div>
            </aside>
        </section>
    )
}