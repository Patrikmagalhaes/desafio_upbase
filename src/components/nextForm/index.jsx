import styles from './nextForm.module.css'
function NextForm() {
    return (
        <>
            <div className={styles.container}>
             
                   <div className={styles.button_container}> <button className={styles.buttonPurple}>Continuar</button></div>
             

                <div className={styles.row}>
                    <hr className={styles.hr} />
                </div>
            </div>

        </>
    )
}
export default NextForm