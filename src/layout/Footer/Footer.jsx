import Link from "next/link";
import styles from "./Footer.module.css";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skill" },
    { name: "Jornada", href: "#journey" },
    { name: "Projetos", href: "#project" },
    { name: "Contato", href: "/contact" },
];

const SOCIAL_LINKS = [
    { name: "Instagram", href: "https://www.instagram.com/srrwende.ll/", external: true },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/wendell-bonucci-8b2aa237a/", external: true },
    { name: "GitHub", href: "https://github.com/WendelBonucci", external: true },
    { name: "NextSolve", href: "/comunity" },
];

const INSTITUTIONAL_LINKS = [
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Comunidade - Tecnologia", href: "/comunity" },
];

function FooterLinks({ title, links }) {
    return (
        <nav>
            <h3 className={styles.titleLinks}>{title}</h3>
            <ul>
                {links.map(link => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className={styles.link}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default function Footer() {
    return (
        <footer className={styles.FooterContent}>
            <section className={styles.divisionFooter}>
                <div className={styles.boxTitle}>
                    <h2>Wendell Bonucci</h2>
                    <p>Engenheiro de Software</p>
                </div>

                <div className={styles.boxLinks}>
                    <FooterLinks title="Navegação" links={NAV_LINKS} />
                    <FooterLinks title="Contato" links={SOCIAL_LINKS} />
                    <FooterLinks title="Institucional" links={INSTITUTIONAL_LINKS} />
                </div>
            </section>
            <div>
                
                <p className={styles.textReserv}>© 2025 Wendell Bonucci. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
