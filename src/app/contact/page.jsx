import React from 'react'
import styles from './contact.module.css'
import Form from './Form/Form'

export default function Page() {
  return (
    <section className={styles.contactPage}>
      <h1 className={styles.titleContact}>Entre em Contato Comigo!!</h1>
      <Form/>
    </section>
  )
}
