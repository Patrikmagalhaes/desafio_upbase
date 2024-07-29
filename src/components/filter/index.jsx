import { useState } from "react"
import styles from './filter.module.css'
export default function Filter() {
    const [isPurple, setIsPurple] = useState(true)

    function toggleButton() {
        setIsPurple(!isPurple)
    }

    return (
        <div className={styles.container}>
            <button
                className={isPurple ? styles.purpleButton : styles.whiteButton}
                onClick={toggleButton}>Todos os flats
            </button>

            <button className={isPurple ? styles.whiteButton : styles.purpleButton} onClick={toggleButton}>Indisponíveis</button>
        </div>
    )
}