import IconPerfil from '../../icons/IconPerfil'
import IconHistoric from '../../icons/IconHistoric'
import IconHome from '../../icons/IconHome'
import IconReservations from '../../icons/IconReservations'
import styles from './menu.module.css'
function Menu() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.menuContainer} >
                    <IconHome />
                    <IconHistoric />
                    <IconReservations />
                    <IconPerfil />
                </div>

                <div className={styles.row}>
                    <hr className={styles.hr} />
                </div>
            </div>


        </>
    )
}
export default Menu