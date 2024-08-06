import Link from 'next/link'
import styles from './Footer.module.css'
import { InstagramSvg } from '../svg/InstagramSvg/InstagramSvg'
import { TwitterSvg } from '../svg/TwitterSvg/TwitterSvg'

export function Footer () {
    return (
      <footer className={styles.container}>

        <h3 className={styles.title}>Síguenos en nuestras redes sociales para no perderte nada</h3>
   
       <p className={styles.text}>
        <TwitterSvg/> 
        Twittea algo con el hastag #FresaTequila y cuentanos si vas a venir a nuestro próximo concierto.</p>
       <p className={styles.text}>
       <InstagramSvg/> Estate informado de nuestra últimas publicaciones en nuestro Instagram.
        </p>


       <p className={styles.textWeb}>
      ¿Quieres tu página web propia?   &nbsp; 
      <Link className={styles.webRef} href='https://www.antonio-web.es' target="_blank"> Háblame</Link>
      </p>
      </footer>
      )
    }