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

    <button>Hazte con tu entrada</button>
</div>
        </section>
    )
}