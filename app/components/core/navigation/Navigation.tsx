import Image from "next/image";
import styles from './Navigation.module.css'
import Link from "next/link";


export function Navigation () {
    return (
        <header className={styles.headerContainer}>

            <div className={styles.logo_container}>
            <Image src="./images/fresa-tequila-text.svg" alt="logo"
                fill sizes='10vh'
                />
            </div>
            
            <div className={styles.nav_container}>
             <Link className={styles.navigationElement} href='/#we_section'>Quienes somos</Link>
             <Link className={styles.navigationElement} href='/#list_song_section'>Temazos</Link>
             <Link className={styles.navigationElement} href='/#gira_section'>Gira</Link>
             <Link className={styles.navigationElement} href='/#fan_section'>Club de fan</Link>
            </div>
        </header>
    )
}
