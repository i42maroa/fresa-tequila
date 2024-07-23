import Link from 'next/link'
import styles from './Footer.module.css'

export function Footer () {
    return (
      <footer className={styles.container}>

        <h3 className={styles.title}>Siguenos en nuestras redes sociales para no perderte nada</h3>
   
       <p className={styles.text}>Twittea algo con el hastag #FresaTequila y cuentanos si vas a venir a nuestro próximo concierto</p>
       <p className={styles.text}>Estate informado de nuestra últimas publicaciones en nuestro Instagram</p>

       <p className={styles.text}>
        ¿Quieres tu página web propia? 
        <span>Háblame</span>
         <Link href='https://www.antonio-web.es' target="_blank"> Antonio Marín</Link>
       </p>
      </footer>
      )
    }