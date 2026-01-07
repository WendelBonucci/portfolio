import React from 'react'
import styles from './Logo.module.css'
import Image from 'next/image'

export default function Logo() {
    return (
        <div className={styles.logo}>
            <div className={styles.dimensionImage}>
                <Image
                    src="/WB.png"
                    alt="Logo WB"
                    width={120}
                    height={120}
                    priority
                />
            </div>
        </div>
    )
}   