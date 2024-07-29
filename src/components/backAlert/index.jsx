import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './backAlert.module.css'

function BackAlert({ title, onClickKeep }) {

    const navigate = useNavigate()

    function backPage() {
        navigate(-1)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerButtons}>
                    <hr className={styles.row} />
                    <p className={styles.title}>{title}</p>
                    <button className={styles.buttonPurple} onClick={backPage}>Sim, sair agora!</button>
                    <button className={styles.buttonGrey} onClick={onClickKeep}>
                        Não, quero continuar
                    </button>
                </div>
            </div>
        </>
    )
}
export default BackAlert