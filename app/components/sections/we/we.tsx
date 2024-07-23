import Image from 'next/image'
import styles from './we.module.css'
import { TeamContainer } from './team-container/Team'
export function WeSection () {
    return (
        <section>
 <h2>Quienes somos</h2>

<div className={styles.textContainer}>
    <p> Fresa Tequila es un vibrante grupo de música juvenil que fusiona el encanto fresco de la juventud con la intensidad y pasión de la música. Su nombre, que evoca la dulzura de las fresas y la emoción del tequila, refleja a la perfección su estilo único y electrizante.</p>

    <div className={styles.imageContainer}>
    <Image src="./images/fresa.svg" alt="logo"   fill sizes='30vh'/>
    </div>

    <TeamContainer/>

    <div className={styles.imageContainer}>
        <Image src="/images/palmera.png" alt="fans"  fill sizes='30vh' />
    </div>

    <p>Este grupo, compuesto por talentosos jóvenes músicos, ha logrado cautivar a audiencias de todas las edades con su carisma y autenticidad. Fresa Tequila es una banda que no solo ofrece una experiencia musical inolvidable, sino que también representa la voz y la pasión de toda una generación. Si buscas música fresca, emocionante y con un toque de rebeldía, Fresa Tequila es el grupo que no querrás perderte</p>

</div>

        </section>
    )
}
    