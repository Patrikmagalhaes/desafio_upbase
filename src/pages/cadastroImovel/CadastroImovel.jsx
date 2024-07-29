import Header from "../../components/header"
import BackAlert from "../../components/backAlert"
import { useState } from "react"
import styles from './cadastroImovel.module.css'
import FormCadastroImovel from "../../forms"
import NextForm from "../../components/nextForm"
const textBackAlert = 'Deseja abandonar o cadastro do imóvel? Esta operação não será salva.'

function CadastroImovel() {
    const [showComponent, setShowComponent] = useState(false)

    const showAlert = () => {
        if (!showComponent) {
            setShowComponent(true)
        } else {
            setShowComponent(false)
        }
    }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.containerTitle}>
                <Header clickBack={showAlert} />
                <h1 className={styles.title}>Para começarmos, precisamos de alguns dados</h1>
            </div>
            <FormCadastroImovel />

          
            {
                showComponent === true &&
                <BackAlert onClickKeep={showAlert}
                    title={textBackAlert} />
            }
        </div>
          <NextForm />
          </>
    )
}

export default CadastroImovel