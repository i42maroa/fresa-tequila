
import Image from 'next/image'
import styles from './Logo.module.css'

export function LogoSection () {
    return (
        <section id="logo_container">
        <div className={styles.logo_container}>
        <Image src="./images/fresa.svg" alt="logo"   fill sizes='10vh'
                />
           </div>
    </section>
)}