"use client";

import { useState } from 'react'
import styles from './Form.module.css'
import emailjs from 'emailjs-com'
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [isLoading, setIsLoading] = useState(false)
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        if (statusMessage.text) {
            setStatusMessage({ type: '', text: '' })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        setStatusMessage({ type: '', text: '' })

        emailjs
            .send(
                "service_wellsynthe77",
                "template_0tcfkai",
                formData,
                "FZeqF3nb_av6BaiBt"
            )
            .then(
                (result) => {
                    setStatusMessage({
                        type: 'success',
                        text: 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
                    })
                    setFormData({ name: "", email: "", message: "" })
                    setIsLoading(false)
                },
                (error) => {
                    setStatusMessage({
                        type: 'error',
                        text: 'Erro ao enviar mensagem. Tente novamente.'
                    })
                    console.error(error)
                    setIsLoading(false)
                }
            )
    }

    const formInfo = {
        title: 'Entre em Contato!',
        text: 'Nesta página, você fica à vontade para entrar em contato comigo por e-mail, enviar sua proposta ou agendar uma reunião para discutirmos uma nova ideia.',
    }

    return (
        <section className={styles.FormContent} id="contact">
            <div className={styles.containerForm}>
                <div className={styles.textForm}>
                    <h2 className={styles.formTitle}>{formInfo.title}</h2>
                    <p className={styles.formDescription}>{formInfo.text}</p>

                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <div className={styles.iconWrapper}>
                                <FiMail />
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>contact.wendellbonucci@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.CardForm}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>
                                <FiUser className={styles.labelIcon} />
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Seu nome completo"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>
                                <FiMail className={styles.labelIcon} />
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="seu.email@exemplo.com"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>
                                <FiMessageSquare className={styles.labelIcon} />
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`${styles.input} ${styles.textarea}`}
                                placeholder="Escreva sua mensagem aqui..."
                                rows="6"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {statusMessage.text && (
                            <div className={`${styles.statusMessage} ${styles[statusMessage.type]}`}>
                                {statusMessage.text}
                            </div>
                        )}

                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <AiOutlineLoading3Quarters className={styles.loadingIcon} />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    <FiSend />
                                    Enviar Mensagem
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}