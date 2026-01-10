import React from 'react'
import styles from './Journey.module.css'

export default function Journey() {
    const journeyData = [
        {
            year: '2023',
            title: 'Inicio do Curso',
            text: 'Em agosto de 2023, iniciei o curso de Ciência da Computação. Antes disso, dediquei três meses ao estudo de lógica de programação com Python. Escolhi essa graduação por sempre ter tido interesse em tecnologia, jogos e automações tecnológicas.',
            position: 'left'
        },
        {
            year: '2024',
            title: 'Estágios e Experiências Profissionais',
            text: 'Em janeiro de 2024, conquistei meu primeiro estágio, atuando na gestão de um site desenvolvido em WordPress, com foco na manutenção e integração de APIs com sistemas como o Bling, atualização de plugins e otimização visual e comercial. Em agosto do mesmo ano, recebi uma proposta de outra empresa para atuar como analista, desempenhando funções semelhantes, porém com participação ativa em todos os processos tecnológicos e administrativos da organização.',
            position: 'right'
        },
        {
            year: '2025',
            title: 'Empresa Tecnologica, Comunidade e Startup',
            text: 'Atuei por um ano como analista nessa empresa e, posteriormente, ingressei na BMcode, uma empresa de tecnologia, onde atuava diariamente no atendimento a chamados de usuários, focado em melhorias e suporte ao ERP Sankhya. Apesar de ter sido uma experiência muito enriquecedora, percebi que não era a área que mais se alinhava ao meu perfil. A partir disso, decidi criar uma comunidade voltada à tecnologia e, por meio dela, formei o time da minha própria empresa de tecnologia.',
            position: 'left'
        },
        {
            year: '2026',
            title: 'NextSolve - Startup',
            text: 'Em setembro de 2025, criei uma comunidade de tecnologia na qual diversos membros passaram a compartilhar ideias, experiências e rotinas. A partir desse movimento, uni meu sonho ao do Guilherme, meu amigo desde 2022, e juntos iniciamos nossa startup, atuando inicialmente com projetos freelancers. Atualmente, estamos desenvolvendo um SaaS de gerenciamento empresarial com inteligência artificial, com lançamento previsto entre o final de 2026 e o início de 2027.',
            position: 'right'
        },
    ]

    return (
        <section className={styles.contentJourney} id='journey'>
            <h2 className={styles.journeyTitle}>EVOLUÇÃO EMPRESARIAL DA STARTUP</h2>

            <div className={styles.timelineContainer}>
                <div className={styles.timelineLine}></div>

                {journeyData.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.timelineItem} ${styles[item.position]}`}
                    >
                        <div className={styles.timelineCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardYear}>{item.year}</span>
                                <span className={styles.cardTitle}>{item.title}</span>
                            </div>
                            <p className={styles.cardText}>{item.text}</p>
                        </div>
                        <div className={styles.timelineDot}></div>
                    </div>
                ))}
            </div>
        </section>
    )
}