import { SwiperComponent } from "../../core/swiper/Swiper";
import styles from './Merchandaising.module.css'

export function MerchandaisingSection () {
    return (
        <section>
            <h2>Merchandaising</h2>

            <p>Hazte con nuestro exclusivo merchandaising, solamente disponible para nuestros fans mas atrevidos.</p>

            <div className={styles.swiperContainer}>
                <SwiperComponent/>
            </div>    

        </section>
    )
}