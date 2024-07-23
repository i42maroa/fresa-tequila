import Link from 'next/link'
import styles from './Gira.module.css'

export function GiraSection(){
    return (
        <section className={styles.gira_section}>
            <div className={styles.bg_image}></div>
            <div className={styles.bg_text}>
                <h2>Próximo Concierto</h2>
                <ul className={styles.list_gira}>
                    <li><p>Barbate - 19 Agosto</p></li>
                </ul>

                <Link href='https://www.instagram.com/fresa.tequila/'target="_blank" className={styles.button}>Hazte con tu entrada</Link>
            </div>
        </section>
    )
}