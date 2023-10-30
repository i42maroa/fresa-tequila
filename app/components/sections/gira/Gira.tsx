import styles from './Gira.module.css'

export function GiraSection(){
    return (
        <section className={styles.gira_section}>
            <div className={styles.bg_image}></div>

<div className={styles.bg_text}>
    <h2>Nuestra gira</h2>
    <ul className={styles.list_gira}>
        <li><p>Córdoba - 20 Diciembre</p></li>
        <li><p>Huelva - 20 Diciembre</p></li>
        <li><p>Sevilla - 20 Diciembre</p></li>
        <li><p>Málaga - 20 Diciembre</p></li>
    </ul>
</div>
        </section>
    )
}