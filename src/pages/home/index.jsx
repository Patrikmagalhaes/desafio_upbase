import { Link } from 'react-router-dom'
import { useState } from 'react'
import IconPlus from '../../icons/IconPlus'
import styles from './home.module.css'
import Header from '../../components/header'
import BackAlert from '../../components/backAlert'
import Menu from '../../components/menu'
import AlertContainer from '../../components/alertContainer'
import Filter from '../../components/filter'
const textBackAlert = 'Você, realmente, deseja sair do Poundsflats?'
const userName = 'Rafael'

function Home() {
  const [showComponent, setShowComponent] = useState(false)

  const showAlert = () => {
    if (!showComponent) {
      setShowComponent(true)
    } else {
      setShowComponent(false)
    }
  }

  return (

    <div className={styles.container}>

      <div className={styles.containerHeader}>
        <Header clickBack={showAlert}>
          <Link className={styles.link} to={'/cadastroimovel'}>
            <IconPlus /> <p className={styles.text}>Cadastrar imóvel</p>
          </Link>
        </Header>
        <h1 className={styles.title}>Bem-vindo, {userName}</h1>
        <Filter />
      </div>


      <AlertContainer />

      {
        showComponent === true &&
        <BackAlert
          onClickKeep={showAlert}
          title={textBackAlert} />
      }

      <Menu />
    </div>

  )
}

export default Home 
