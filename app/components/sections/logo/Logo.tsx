
import Image from 'next/image'
import styles from './Logo.module.css'

export function LogoSection () {
    return (
        <div id="logo_container">
        <div className={styles.logo_container}>
        <Image src="/images/portada.jpeg" alt="logo"   fill sizes='80vh'/>
           </div>
    </div>
)}