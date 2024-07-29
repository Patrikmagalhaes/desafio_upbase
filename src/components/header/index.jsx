import ArrowBack from '../../icons/arrowBack.svg'
import styles from './header.module.css'

function Header({ clickBack, children }) {

    const showModal = () => {
        if (clickBack) {
            clickBack()
        }
    }

    return (
        <div>
            <header className={styles.header}>
                <button className={styles.button} onClick={showModal}>
                    <img  src={ArrowBack} alt="arrow" />
                </button>
                {children}
            </header>
        </div>
    )
}

export default Header