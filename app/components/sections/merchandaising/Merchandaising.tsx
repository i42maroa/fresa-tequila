import { SwiperComponent } from "../../core/swiper/Swiper";
import styles from './Merchandaising.module.css'

export function MerchandaisingSection () {
    return (
        <section>
            <h2>Hazte con nuestro merchandaising</h2>

            <div className={styles.swiperContainer}>
                <SwiperComponent/>
            </div>    
        </section>
    )
}