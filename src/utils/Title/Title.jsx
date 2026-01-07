"use client"
import React from 'react'
import styles from './Title.module.css'

export default function Title({ text, noPaddingBotton }) {
    return (
        <section className={` ${styles.boxTitle} ${noPaddingBotton ? styles.noPaddingBotton : ""}`}>
            <div className={styles.dimensionTitle}>
                <h2 className={styles.titleInform}>{text}</h2>
            </div>
        </section>
    )
}