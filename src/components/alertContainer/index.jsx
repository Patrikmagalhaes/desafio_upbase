import { Link } from 'react-router-dom'
import IconSad from '../../icons/sad.svg'
import styles from './alertContainer.module.css'

function AlertContainer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.containerAlert}>
                    <img className={styles.icon} src={IconSad} alt="Sad icon " />
                    <h2 className={styles.title}>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</h2>
                    <Link to={'/cadastroimovel'}>
                        <button className={styles.button}>Cadastrar meu primeiro imóvel</button>
                    </Link>

                </div>
            </div>
        </>
    )
}
export default AlertContainer