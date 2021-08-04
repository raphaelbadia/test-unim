import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <form action="https://www.staging.maiia.com/api-unim-test" method="POST" target="_blank">
        <input type="text" id="unim" name="unim" value="LE_CODE_QUE_UNIM_VA_CHANGER" style={{display: 'none'}}/>
        <input type="submit" value="Voir sur maiia"/>
      </form>
    </div>
  )
}
