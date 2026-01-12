"use client"
import { useEffect, useState } from 'react'
import styles from './Header.module.css'

// import of components
import Logo from './components/Logo/Logo'
import Navgation from './components/Navgation/Navgation'
import Button from './components/Buttons/Button'
import SideBar from './components/SideBar/SideBar'

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        const handleResize = () => setIsMobile(window.innerWidth < 768);

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className={`${styles.Header} ${scrolled ? styles.scrolled : ''}`}>
            <section className={styles.contentHeader}>
                <Logo />
                <Navgation />
                <Button />
            </section>

            {isMobile && <SideBar />}
        </header>
    )
} 