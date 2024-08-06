'use client'
import Image from "next/image";
import styles from './Navigation.module.css'
import Link from "next/link";
import { useState } from "react";
import { MenuButton } from "../buttons/menu-button/MenuButton";


export function Navigation () {
    const [showNav, setShowNav] = useState(false);

    const pressOpenMenuButton = () => {
        setShowNav(!showNav)
      }
    return (
        <header className={styles.headerContainer}>

            <Link className={styles.logo_container}  href='/'>
                <Image src="./images/fresa-tequila-text.svg" alt="logo" fill sizes='10vh'/>
            </Link>


            <button className={styles.buttonOpenMenu} onClick={() => pressOpenMenuButton()}>
                <MenuButton stateValue={showNav} /></button>

            
            <div className={styles.nav_container}>
             <Link className={styles.navigationElement} href='/'>Noticias</Link>
             <Link className={styles.navigationElement} href='/songs'>Temazos</Link>
             <Link className={styles.navigationElement} href='/store'>Tienda</Link>
             <Link className={styles.navigationElement} href='/club'>Club</Link>
             <Link className={styles.navigationElement} href='/about'>Nosotros</Link>
            </div>


            {showNav &&  <div className={styles.navContainerMovil}>
                <div className={styles.navContainerMovilList}>
                <Link className={styles.navigationElementMovil} href='/' onClick={() => pressOpenMenuButton()}>Noticias</Link>
                <Link className={styles.navigationElementMovil} href='/songs' onClick={() => pressOpenMenuButton()}>Temazos</Link>
                <Link className={styles.navigationElementMovil} href='/store' onClick={() => pressOpenMenuButton()}>Tienda</Link>
                <Link className={styles.navigationElementMovil} href='/club' onClick={() => pressOpenMenuButton()}>Club</Link>
                <Link className={styles.navigationElementMovil} href='/about' onClick={() => pressOpenMenuButton()}>Nosotros</Link>  
                </div>
                 
            </div>}
        </header>
    )
}
