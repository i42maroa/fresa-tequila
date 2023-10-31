
import Image from 'next/image'
import styles from './Fans.module.css'

export function FansSection () {
    return (
<section className={styles.fan_section}>
    <h2>Club de fans</h2>

    <p className={styles.text}> Como miembro del Club de Fans de Fresa Tequila, te sumergirás en un mundo de emociones y camaradería. Este club ofrece a sus seguidores una oportunidad especial para conectarse, compartir experiencias y disfrutar de contenido exclusivo de la banda.</p>
    
    <p className={styles.text}> Desde anticipar lanzamientos de sencillos y álbumes hasta participar en encuentros y eventos especiales con la banda, ser parte de este club significa estar en primera fila de la emoción.</p>

    <div className={styles.fansContainerImage}>
        <Image src="/images/fans.jpg" alt="fans"  fill sizes='100vh' />
    </div>

    <p className={styles.textUnete}> ¡¡ Unete a nosotros, ya somos más de 200000 Fresa Tequileses !!</p>

    <button className={styles.button}> UNETE</button>
   </section>
)}